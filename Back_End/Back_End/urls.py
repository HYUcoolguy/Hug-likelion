from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from rest_framework import urls

from Feed import urls
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    #path('', include('mystorage.urls')),
    path('', include('Feed.urls')),
    #api-auth : 로그인/로그아웃 기능
    path('api-auth/', include('rest_framework.urls')),
]

urlpatterns +=static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)