from .serializers import ListingSeriallizer
from listings.models import Listing
from rest_framework import generics

class ListingList(generics.ListAPIView):
    queryset = Listing.objects.all()
    serializer_class = ListingSeriallizer
