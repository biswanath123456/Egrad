from django.shortcuts import redirect, render, get_object_or_404
from django.urls import reverse_lazy
# from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import CreateView, UpdateView, ListView, DeleteView, DetailView
from .models import Post, Comment
from .forms import CommentForm
# Create your views here.

class AllPosts( ListView):
    # login_url = '/login/'
    model = Post
    template_name = 'openforum.html'
    context_object_name = 'posts' 


class PostDetails( DetailView):
    login_url = '/login/'
    model = Post

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['comments']=Comment.objects.all().filter(post= context['post'])
        return context

class CreatePost(CreateView):
    login_url = '/login/'

    template_name = 'posts/posts_form.html'
    model = Post
    fields = ('title', 'description', 'image')
    success_url = reverse_lazy("posts:list")

    def form_valid(self, form):
        form.instance.author = self.request.user
        return super().form_valid(form)

class UpdatePost(  UpdateView):
    login_url = '/login/'

    template_name = 'posts/posts_form.html'
    model = Post
    fields = ('title', 'description', 'image')
    success_url = reverse_lazy("posts:list")

class DeletePost(  DeleteView):
    login_url = '/login/'

    model = Post
    success_url = reverse_lazy("posts:list")


def comment(request, pk):
    form = CommentForm()
    if request.method == 'POST':
        form = CommentForm(request.POST)
        if form.is_valid():
            form.instance.commentator = request.user
            form.instance.post = get_object_or_404(Post, pk=pk)
            form.save()
            return redirect("posts:details", pk=pk)
    return render(request, 'posts/comment_form.html', {'form' : form})


class RemoveComment(  DeleteView):
    login_url = '/login/'

    model = Comment
    success_url = reverse_lazy("posts:list")

class EditComment(  UpdateView):
    login_url = '/login/'

    model = Comment
    form_class = CommentForm
    success_url = reverse_lazy("posts:list")