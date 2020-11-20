python wait_postgres.py
python manage.py makemigrations
python manage.py migrate
python manage.py loaddata test_data
gunicorn korobasy.wsgi:application --bind 0.0.0.0:8000