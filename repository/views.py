from django.urls import reverse_lazy
from django.shortcuts import render, redirect, get_object_or_404, HttpResponse
from django.views.generic import DeleteView, ListView
# from django.contrib.auth.mixins import LoginRequiredMixin
from .models import Document
from .forms import DocumentForm
# Create your views here.

class Home(ListView):
    login_url = '/login/'

    model=Document
    context_object_name="documents"
    template_name="erepository.html"



def upload(request):
    form = DocumentForm()
    if request.method == "POST":
        form = DocumentForm(request.POST, request.FILES)
        if form.is_valid():
            myform = form.save(commit=False)
            myform.user = request.user
            myform.save()
            return redirect("repository:erep")
    return render(request, template_name="repository/upload_form.html", context={'form': form})

class DocumentDelete(DeleteView):
    login_url = '/login/'

    model=Document
    template_name="repository/doc_delete.html"
    success_url = reverse_lazy("repository:erep")

def download(request, pk):
    document = get_object_or_404(Document, pk=pk)
    response = HttpResponse(document.file, content_type='application/pdf')
    response['Content-Disposition'] = f'attachment; filename="{document.file.name}"'
    return response