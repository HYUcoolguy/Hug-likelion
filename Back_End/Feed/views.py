from rest_framework import viewsets
from .models import Video, VideoClass
from .serializers import VideoSerializer, VideoClassSerializer
from rest_framework.filters import SearchFilter
from rest_framework.parsers import MultiPartParser, FormParser

# Video 정보
class VideoViewSet(viewsets.ModelViewSet):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer

# Video 분류
class VideoClassViewSet(viewsets.ModelViewSet):
    queryset = VideoClass.objects.all()
    serializer_class = VideoClassSerializer




