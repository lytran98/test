
status="Mr.Linhkool"
var a=new Array(),n=""
a[1]='Đ';
a[2]='ú';
a[3]='n';
a[4]='g';
a[5]=' ';
a[6]='v';
a[7]='ậ';
a[8]='y';
a[9]='!';
a[10]=' ';
a[11]='a';
a[12]='n';
a[13]='h';
a[14]=' ';
a[15]='L';
a[16]='ý';
a[17]=' ';
a[18]='đ';
a[19]='ẹ';
a[20]='p';
a[21]=' ';
a[22]='t';
a[23]='r';
a[24]='a';
a[25]='i';
a[26]=' ';
a[27]='n';
a[28]='h';
a[29]='ấ';
a[30]='t';
a[31]=' ';
a[32]='v';
a[33]='ũ';
a[34]=' ';
a[35]='t';
a[36]='r';
a[37]='ụ';
a[38]=' ';
a[39]='♥';
a[40]='♥';
a[41]='♥';
a[42]='♥';
a[43]='♥';
a[44]='♥';
a[45]='♥';
function one()
{
t=document.f.txt.value
j=t.length
if(j>0)
{
for(var i=1;i<=j;i++)
{
n=n+a[i]
if(i==45)
{
document.f.txt.value=""
n=""
}
}
}
document.f.txt.value=n
n=""
setTimeout("one()",1)
}
function s()
{
}
function on()
{
one()
}

        $(document).ready(function() {
            $('#k').hide();
            $('h1').click(function() {
                $('.active').removeClass('active');
                $('#k').slideUp('fast');
                if($(this).next('#k').is(':hidden') == true) {
                $(this).addClass('active');
                $(this).next('#k').slideDown('fast');
                }
            });
        });
					function Yeu()
					{
					$("#divResult").fadeOut(0);
					$("#divResult").html("</br><h2>He..He..! Ai cũng nói vậy hết đó 😆</h2><br>");
					$("#divResult").fadeIn(2000,function()
							{
							$("#divResult2").fadeOut(0);
							$("#divResult2").html("<center><p>Nhưng mà KỆ EM 😝</p></center>");
							$("#divResult2").fadeIn(2000,function()
							{
							$("#divResult3").fadeOut(0);
							$("#divResult3").html("<p>Xin lỗi! anh muốn độc thân, với cả anh không phải loại đàn ông dễ dãi </p></br>");
							$("#divResult3").fadeIn(2000);
							
							}
						);
					}
				);
			}
				