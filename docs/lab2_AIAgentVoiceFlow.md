# Lab 2 - Adding Webex AI Agents to an IVR Flow. 

## Context

Great work getting to the second lab! :rocket: Now that you have created your own Autonomous AI Agent, it's time to take it to the next level by integrating it into an IVR flow. :telephone:  With **Webex AI Agent**, you can revolutionize your customers' journeys—whether digital or voice—by enabling more natural and engaging conversations compared to traditional Q&A bots. Just like in the previous lab, we've made this incredibly simple using the **WxCC Flow Designer**. 

Let's get started!


### High Level Explanation :open_book:
1. Initial setup of your human agent team and queue will be done via API. 
2. You will create a voice flow from **WxCC Flow Designer** to route calls to your AI Agent. 
3. Add a new inbound telephony Channel with a PSTN number. 
5. Login to Agent Desktop and select the team you created.
6. Place a call to talk to your AI Agent and transfer to an agent. 


### Preconfigured Elements :computer:

We will save some time by setting up your Team and Queue for you, please click the following button to trigger this action:

<button onclick="createInitialSetup()">Create Team and Queue</button> 
<span id="setup-message" style="margin-left: 10px; color: green;"></span>

Confirm your Team and Queue was configured in [Control Hub](https://admin.webex.com){:target="_blank"}. 

---

## Build :hammer_and_wrench:

### Creating an IVR flow using **WxCC Flow Designer**. 

WxCC flow designer is lalalala

1. Navigate to the **Flows** page from the Customer Experience section in Control Hub. 
2. Click the "Manage Flows" drop down on the right and select the option "Create Flows". 
3. You will now see 3 options: **Start Fresh, Flow Templates or Import**. For the purpose of this lab, we will create our own flow (click **Start Fresh**), but keep in mind we do provide templates for this type of IVR flow. 
4. Enter this name for your flow **AI_Flow_<span id="attendee-id">---</span>** and click the **Create Flow** button. 
5. From the **Activity Library** on the left, drag and drop the **Virtual Agent V2** node into the Canvas (gray working space area). 
6. Click the output connection of the **NewPhoneContact** and link it to the input connection on your **Virtual Agent V2** node. 
7. Add the **Queue Contact** node to your canvas. Connect the **Escalated** output on your node to the input on your **Queue Contact** node. 
8. Drag and drop the **End Flow** node to your canvas. Link the **Handled** connector from your **Virtual Agent V2** node and the **Queue Contact** output to the input connector of the **End Flow** node. 
9. Select the **Virtual Agent V2** and configure these settings in the properties pane: 
  >Contact Center AI Config = Webex AI Agent (Autonomous)
  >
  >Virtual Agent = **<span id="attendee-id">---</span>_AutoAgent** or **Doctor's appointment - <span id="attendee-id">---</span>**
10. Select the **Queue Contact** activity and select the queue with name **Queue_<span id="attendee-id">---</span>**.
11. We are finished with the configuration, let's enable **Validation** in the bottom right corner. No errors should come up, now select the option to **Publish Flow**. 
12. A new window pops up, don't select any version labels, click **Publish Flow**. 

### Configure an Inbound Telephony Channel.

1. Navigate to the **Channels** page from the Customer Experience section in Control Hub.
2. Click the option **Create Channel**. A new window will come up, enter the following details: 
  >Name: **<span id="attendee-id">---</span>_AutoChannel**
  >Description: AI Agents @ CCW
  >Channel Type: Inbound Telephony
  >Service Level Threshold: 120
  >Routing Flow: **AI_Flow_<span id="attendee-id">---</span>**
  >Version Label: Latest
  >Music on Hold: defaultmusic_on_hold.wav
3. Select the option to add a support number. Select the location **WxCC RTP** and choose any number from the list. 
4. Click the checkbox on the right to confirm the number selection and then select the **Create** option. 

### Login to Agent Desktop. 
1. Open the Chrome profile called **WxCC Agent**. 
2. Launch the [Agent Desktop](https://desktop.wxcc-us1.cisco.com/) and log with the stored credentials. 
3. In the **Station Credentials** window, select the **Desktop** telephony option and team called **Team_<span id="attendee-id">---</span>**
4. Set your status to available to receive a call while testing. 

You are ready to test your AI Agent over voice. 

---

## Testing :test_tube:

1. Call the number you assigned to your inbound telephony channel. 
2. Your AI Agent should greet you with its welcome message. 
3. Depending on the type of AI Agent you built in the first lab, ask a couple of relevant questions. 
4. Request for a transfer to a human agent. 
5. Answer the call in the Agent Desktop, a notification will pop up to review the summary of your conversation with the AI Agent. 

You have finished Lab 2. Congratulations!

---

# Once you have completed the testing, let the instructor know.
<script src='../assets/load.js'><script>