#pragma strict
var time:float;

function Start () {
	time = 110.0f;
	GameObject.Find("timerUI").GetComponent.<UI.Text>().text = "";
	GameObject.Find("userMessageUI").GetComponent.<UI.Text>().text = "";
}

function Update () {
	time = time + Time.deltaTime;
	var seconds:int = time;
	var minutes:int = time/60;
	seconds = time%60;
	GameObject.Find("timerUI").GetComponent.<UI.Text>().text = minutes+":"+seconds;
	if(time>115)
	{
	GameObject.Find("userMessageUI").GetComponent.<UI.Text>().text = "Time is Almost Up";
	if(time >116)
		{
		GameObject.Find("userMessageUI").GetComponent.<UI.Text>().text ="";
		}
	}
	if(time>120)
		{
		GameObject.Find("userMessageUI").GetComponent.<UI.Text>().text = "TIME IS UP, RESTARTING...";
//		sleep(1000);
		if(time>122)
			{
			GameObject.Find("userMessageUI").GetComponent.<UI.Text>().text ="";
			Application.LoadLevel("indoor");
			time = 110.0f;
			}
		}
	
}

//function sleep(ms:long) {
//                var currentTime = new Date().Now;
//                while (currentTime + ms >= new Date().Now) {
//                print("in 3");
//                }
//            }