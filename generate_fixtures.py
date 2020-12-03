from uuid import uuid4
from faker import Faker
from random import randint,random
from pprint import pprint
import json
fake = Faker(['ru-RU'])
Faker.seed()

users = [1]
things = []
sections = []
storages = []
instance = []

def make_storage(owner):
    result = {}
    result['model'] = 'storages.Storage'
    fields = {}
    fields['id'] = str(uuid4())
    fields['name'] = 'Хранилище №'+fake.kpp()
    fields['owner'] = owner
    result['fields'] = fields
    return result

def make_section(storage):
    result = {}
    result['model'] = 'storages.Section'
    fields = {}
    fields['id'] = str(uuid4())
    fields['name'] = 'Секция '+fake['ru-RU'].kpp()
    fields['storage'] = storage['fields']['id']
    result['fields'] = fields
    return result
    
def make_thing():
    result = {}
    result['model'] = 'things.Thing'
    fields = {}
    fields['id'] = str(uuid4())
    fields['name'] = fake['ru-RU'].sentence(nb_words=2, variable_nb_words=False)
    fields['description'] = fake['ru-RU'].catch_phrase()
    result['fields'] = fields
    return result

def make_thing_instance(section,thing):
    result = {}
    result['model'] = 'things.ThingInstance'
    fields = {}
    fields['id'] = str(uuid4())
    fields['section'] = section['fields']['id']
    fields['type'] = thing['fields']['id']
    fields['count'] = randint(1,100)
    result['fields'] = fields
    return result

for i in range(6):
    storages.append(make_storage(1))

for i in range(21):
    sections.append(
        make_section(
            storages[randint(0,5)]
        )
    )

for i in range(31):
    things.append(
        make_thing()
    )

for i in range(51):
    instance.append(
        make_thing_instance(
            sections[randint(0,20)],
            things[randint(0,30)]
        )
    )

json_str = json.dumps(things+instance, indent=4,ensure_ascii=False)
print(json_str)
json_str = json.dumps(storages+sections, indent=4,ensure_ascii=False)
print(json_str)