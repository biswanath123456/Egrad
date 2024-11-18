from django.db import models
# from django.contrib
from django.contrib.auth import get_user_model

# from Home.models import Personal



# Create your models here.
class Post(models.Model):
    author = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    title = models.CharField(max_length=200, blank=False, null=False)
    description = models.TextField()
    image = models.ImageField(upload_to='posts', blank=True, null=True)
    posted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return f'{self.title}'
    
    class Meta:
        ordering = ['-posted_at']

class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='post')
    commentator = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    text = models.CharField(max_length=300, null=False, blank=False)

    def __str__(self) -> str:
        return f'{self.post.id}-{self.commentator}'