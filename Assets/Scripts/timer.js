#pragma strict
var time:float;

function Start () {
	time = 0.0f;
	GameObject.Find("timerUI").GetComponent.<UI.Text>().text = "";
	GameObject.Find("userMessageUI").GetComponent.<UI.Text>().text = "";
}

function Update () {
	time = time + Time.deltaTime;
	var seconds:int = time;
	var minutes:int = time/60;
	seconds = time%60;
	GameObject.Find("timerUI").GetComponent.<UI.Text>().text = minutes+":"+seconds;
	if(time>118)
	{
	GameObject.Find("userMessageUI").GetComponent.<UI.Text>().text = "Time Almost Up";
	}
	if(time>120)
		{
		print("TIME UP, restart.");
		Application.LoadLevel("indoor");
		}
}