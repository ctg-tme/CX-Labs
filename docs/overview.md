# Overview

## Learning Objectives

This lab will give you an introduction on how to craft enhanced customer experiences using Webex AI within our Customer Experience solution. 

## Disclaimer

Although the lab design and configuration examples could be used as a reference, for design related questions please contact your representative at Cisco, or a Cisco partner.

## Lab Access

In these series of labs you will be using the same tenant as other participants, please DO NOT make any changes unless specified in this guide. 

You will be using Chrome profiles to move between the different contact center personas (admin, agent and supervisor). Each chrome profile has been pre-configured with the required credentials and bookmarks. 

---



## Getting Started

Before you get started click this button to generate your Attendee ID.  <button onclick="generateAttendeeId()">Generate Attendee ID</button>

Your Attendee ID is: <span id="attendee-id">---</span>

Open the Chrome Profile named "CX Labs Admin".

Navigate to [Webex Control Hub](https://admin.webex.com){:target="_blank"} and login using the stored credentials.


- Username: <copy><w class="login">Provided by proctor</w></copy>
- Password: <copy><w class="PW">Provided by proctor</w></copy>


---
> Log into [Webex Control Hub](https://admin.webex.com){:target="_blank"} in Chrome

> Login: <copy><w class="login">Provided by proctor</w></copy>
> 
> Password: <copy><w class="PW">Provided by proctor</w></copy>

---
### Testing your lab setup
> 1. Launch the [Agent Desktop](https://desktop.wxcc-us1.cisco.com/){:target="_blank"} and log in selecting the Desktop option for your Voice connection.
2. From the Webex App, dial <copy><w class="EPDN">Provided by proctor</w></copy>
      1. You will hear a greeting message which will include the pod number which you have been assigned.
      2. The call will be place in your queue.
      3. You will hear the hold music until the call is answered
3. In the agent desktop, set your status to Available and answer the call.
      1. Confirm that you can hear audio being passed in both directions.
      2. Disconnect the call
      3. Select a Wrap-up Code
      4. Set your status to Meeting
4. In Control Hub, navigate to Contact Center > Flows
      1. Locate and open the flow named: <copy><w class ="POD">yourLabID</w>_Demo_Lab0</copy>
      2. Click on Debug at the bottom of the screen.
      3. Click on the interaction ID
      4. Explore the steps the call took as it traversed the flow.
      5. When you are done you can close the flow.

---

<script src='../assets/load.js'><script>