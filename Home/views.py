from django.shortcuts import render, HttpResponse, redirect
# from Home.models import Personal,Education,Security
from django.contrib.auth.models import User
from .forms import CustomUserForm
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
# Create your views here.

def home(request):
    if request.method=="POST":
        email = request.POST.get('email')
        pas = request.POST.get('pas')
   
        user = authenticate(request, username=email, password=pas)

        if user is not None:
            login(request)
            return redirect('login')
        
        else:
            return HttpResponse("Username and password incorrect")
 
        
    return render(request, 'Home.html')

def e_exam(request):
    return render(request,'E-Exam.html')

# def e_repo(request):
#     return render(request,'e-Repo.html')

def dashboard(request):
    return render(request,'dashboard.html')

# def mywall(request):
#     return render(request,'MyWall.html')

def guide(request):
    return render(request,'Guidelines.html')

def download(request):
    return render(request,'download.html')

# def signup(request):
#         if request.method == "POST":
#             fname = request.POST.get('fname')
#             mname = request.POST.get('mname')
#             lname = request.POST.get('lname')
#             dob = request.POST.get('dob')
#             gender = request.POST.get('gender')
#             addr = request.POST.get('addr')
#             dist = request.POST.get('dist')
#             state = request.POST.get('state')
#             pin = request.POST.get('pin')
#             phone = request.POST.get('phone')
#             email = request.POST.get('email')

#             clg = request.POST.get('clg')
#             course = request.POST.get('course')
#             branch = request.POST.get('branch')
#             cid = request.POST.get('cid')
#             sem = request.POST.get('sem')
#             batch = request.POST.get('batch')

#             pas = request.POST.get('pas')
#             cpas = request.POST.get('cpas')

#             personal = Personal(fname=fname, mname=mname, lname=lname, dob=dob, gender=gender, addr=addr, dist=dist,
#             state=state, pin=pin, phone=phone, email=email)

#             edu = Education(email=email, clg=clg, course=course, branch=branch, cid=cid, sem=sem, batch=batch)

#             secu = Security(email=email, pas=pas, cpas=cpas)

#             my_user = User.objects.create_user(email,fname,pas)

#             my_user.save()
#             personal.save()
#             edu.save()
#             secu.save()

#             return redirect('home')


#         return render(request, 'signup.html')
def signup(request):
    form=CustomUserForm()
    if request.method == 'POST':
        form=CustomUserForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.username=f'{user.first_name}_{user.last_name}'
            user.save()
            return redirect('Home:home')
    return render(request, 'sign_up.html',context={'form':form})


def login(request):    
    return render(request, 'login.html')

def logout(request):
    return render(request, 'Home:logout')


