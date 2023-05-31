python -m pip install --upgrade pip
pip install --upgrade virtualenv
python -m venv "C:\ProyectosDjango\TiendaMascotas_venv"
call cd /D "C:\ProyectosDjango"
call TiendaMascotas_venv\Scripts\activate.bat
python -m pip install --upgrade pip
pip install django
pip install pillow
pip install djangorestframework
pip install transbank-sdk
call django-admin startproject TiendaMascotas
call cd TiendaMascotas
python manage.py startapp core
python manage.py startapp apirest
pip freeze > requirements.txt
call code "C:\ProyectosDjango\TiendaMascotas"
