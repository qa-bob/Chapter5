#pragma strict

var score:int;
function Start () {
score = 0;
}

function Update () {

}

function OnControllerColliderHit(hit:ControllerColliderHit)
{

var label:String = hit.collider.gameObject.tag;

if (hit.collider.gameObject.tag == "pick_me")
{
print("Collision with "+label);
	score = score + 1;
	print ("score "+score);
	Destroy (hit.collider.gameObject);
	if (score >= 3) Application.LoadLevel("outdoor");
}

}