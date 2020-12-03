from os import environ
from pathlib import Path
from django.conf import settings

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = environ['SECRET_KEY']
DEBUG = int(environ.get("DEBUG", default=0))
ALLOWED_HOSTS = environ["DJANGO_ALLOWED_HOSTS"].split(" ")

CORS_ORIGIN_ALLOW_ALL=True

INSTALLED_APPS = [
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.staticfiles',
    
    'rest_framework',
    'corsheaders',
    'taggit',
    'taggit_serializer',
    'djoser',

    'users',
    'storages',
    'things'

]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware'
]

ROOT_URLCONF = 'korobasy.urls'

WSGI_APPLICATION = 'korobasy.wsgi.application'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'HOST': 'database',
        'PORT': environ['POSTGRES_PORT'],
        'NAME': environ['POSTGRES_DB'],
        'USER': environ['POSTGRES_USER'],
        'PASSWORD': environ['POSTGRES_PASSWORD']
    }
}

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True
USE_L10N = True
USE_TZ = True

STATIC_URL = '/static/'

REST_FRAMEWORK = {
    'DEFAULT_RENDERER_CLASSES': [
        'rest_framework.renderers.JSONRenderer',
    ],
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
}

SIMPLE_JWT = {
   'AUTH_HEADER_TYPES': ('Bearer', 'JWT'),
}

CORS_ALLOWED_ORIGINS = [
    "http://127.0.0.1:9000"
]