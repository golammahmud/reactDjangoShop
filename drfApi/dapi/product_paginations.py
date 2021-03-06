from rest_framework.pagination import PageNumberPagination

from rest_framework.pagination import LimitOffsetPagination


class ProductPagination(PageNumberPagination):
    page_size = 1
    # page_query_param='query'
    page_size_query_param='records'
    max_page_size=5
    # last_page_string='end'
    
    
class ProductLimitOffsetPagination(LimitOffsetPagination):
    default_limit=1
    # limit_query_param='limitquery'   
    # offset_query_param='offsetrecords' 
    max_limit=6