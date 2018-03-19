#pragma strict
var time:float;

function Start () {
time = 0.0f;
}

function Update () {
time = time + Time.deltaTime;
var seconds:int = time;
print("Time:"+seconds);

}