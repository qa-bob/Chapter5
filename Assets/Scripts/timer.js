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
	GameObject.Find("timerUI").GetComponent.<UI.Text>().text = minutes+"-"+seconds;
	if(time >=2)
	{
	GameObject.Find("userMessageUI").GetComponent.<UI.Text>().text = "Collect 3 boxes to get outside you have 30 sec";
	}
	if(time >=5)
	{
	GameObject.Find("userMessageUI").GetComponent.<UI.Text>().text = "";
	}
	if(time>25)
	{
	GameObject.Find("userMessageUI").GetComponent.<UI.Text>().text = "Time is Almost Up";
	if(time >26)
		{
		GameObject.Find("userMessageUI").GetComponent.<UI.Text>().text ="";
		}
	}
	if(time>30)
		{
		GameObject.Find("userMessageUI").GetComponent.<UI.Text>().text = "TIME IS UP, RESTARTING...";
//		sleep(1000);
		if(time>32)
			{
			GameObject.Find("userMessageUI").GetComponent.<UI.Text>().text ="";
			Application.LoadLevel("indoor");
			time = 0.0f;
			}
		}
	
}

//function sleep(ms:long) {
//                var currentTime = new Date().Now;
//                while (currentTime + ms >= new Date().Now) {
//                print("in 3");
//                }
//            }