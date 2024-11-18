from django.urls import path
from .views import CreatePost, AllPosts, UpdatePost, DeletePost,PostDetails , comment, RemoveComment, EditComment


app_name = "posts"
urlpatterns = [
    path("openforum/", AllPosts.as_view(), name='list' ),
    path("createpost/", CreatePost.as_view(), name="create"),
    path("updatetepost/<int:pk>/", UpdatePost.as_view(), name="update"),
    path("deletepost/<int:pk>/", DeletePost.as_view(), name="delete"),
    path("post/<int:pk>/", PostDetails.as_view(), name="details"),
    path("post/<int:pk>/comment/", comment, name="comment"),
    path("comment/<int:pk>/del/", RemoveComment.as_view(), name="deletecomment"),
    path("comment/<int:pk>/edit/", EditComment.as_view(), name="editcomment"),

]
