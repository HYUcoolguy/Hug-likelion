from rest_framework.routers import DefaultRouter
from django.urls import path, include
from Feed import views

router = DefaultRouter()
# FEED 화면 (투데이)
router.register('feed', views.VideoClassViewSet)
# Video 등록 (관리자 페이지)
router.register('upload_video', views.VideoViewSet)

urlpatterns = [
    path('', include(router.urls)),
]