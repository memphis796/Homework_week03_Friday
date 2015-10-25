var cal = document.getElementById('display');

function addtoscreen(x)
{
  cal.value +=x;
  if(x=='c')
{
    cal.value = '';
  }
}

function answer()
{
  x=cal.value;
  x=eval(x);
  cal.value=x;
}
