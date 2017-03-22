# -*- coding: utf-8 -*-
# @Author: Kristinita
# @Date:   2017-01-25 18:48:20
# @Last Modified by:   Kristinita
# @Last Modified time: 2017-01-25 18:48:59
#!/usr/bin/env python
# -*- coding: utf-8 -*-

from __future__ import unicode_literals
from itertools import chain
from pelican import signals

def fix_pages(generator):
    for page in chain(generator.translations, generator.pages,
            generator.hidden_translations, generator.hidden_pages):
        # Получаем путь исходника относительно каталога content
        new_path = page.get_relative_source_path()
        # Заменяем расширение на html
        new_path = new_path.rsplit('.', 1)[0] + '.html'
        # И пихаем в страницу вместо родных путей относительно output
        page.override_url = new_path
        page.override_save_as = new_path

def register():
    signals.page_generator_finalized.connect(fix_pages)