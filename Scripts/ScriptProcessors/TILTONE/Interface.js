Content.makeFrontInterface(476, 714);

const var Button1 = Content.getComponent("Button1");



// 초기 값이 1이면 강제로 0으로 되돌림 (초기 실행 시 콜백 방지용)
if (Button1.getValue() == 1)
    Button1.setValue(0);

// 콜백 함수
inline function onButton1Click(component, value)
{
    // 반드시 사용자가 눌렀을 때만
    if (value == 1)
    {
        Engine.openWebsite("https://www.quietformat.com");
        Button1.setValue(0); // 눌림 상태 초기화
    }
}

Button1.setControlCallback(onButton1Click);
function onNoteOn()
{
	
}
 function onNoteOff()
{
	
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 