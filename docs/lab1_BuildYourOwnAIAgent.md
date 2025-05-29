# Lab 1 - Build Your Own AI Agent

## Context
Agentic AI is transforming customer service by enabling systems to proactively resolve issues, deliver personalized assistance, and automate repetitive tasks, boosting efficiency and satisfaction. Despite the complexity behind Agentic AI, Webex AI Agent is designed to be intuitive and easy to use, making it accessible even for IT professionals just beginning their AI journey. Let us prove it to you in this 20 minute lab! 

### High Level Explanation
1. You will upload a knowledge base, using RAG ensures the AI Agent knowledge is grounded to accurate and relevant data. 
2. You will build your own AI Agent, this will require you to configure the agent's goal. 
3. Once the agent is created, you will update the instructions field and setup a fultillment action. 
4. Once this is done, you are ready to test your AI Agent using our Preview feature. 

!!! Warning "Important"
    We have 2 options available for the creation of the AI agent: 

    1. Use an AI Agent template and generic knowledge base. 
    2. Build your AI Agent from scratch and upload your own knowledge base. 

---
## Build

### Creating a Knowldge Base

We have two options for you to create a knowledge base: 

a. Create your own KB by collecting information from your company's website (eg, an FAQ) and adding it as a document inside a KB.  
b. Upload a generic KB file available in this PC station. 

Select one of the options and follow the instructions: 

??? Note "Create your own KB"
    1. Navigate to your company's website and find the information you would like to include, eg FAQ, company policies, PDF with information about a product your company offers, etc. 
    2. From the AI Agent Studio, select the notebook icon on the left navigation menu. This is where you will manage your Knowledge Bases. 
    3. Click **Create Knowledge Base**, provide Knowledge base name as <span id="attendee-id">---</span>_AI_KB, then click **Create**.
    4. Select the **Documents** tab and click the option **+ Create Document**. 
    5. Enter the Document name <span id="attendee-id">---</span>_AI_DOC. Select the option **Add to new category**, name the category anything that matches the information you are adding eg FAQ, product information, etc. 
    6. Copy the content you want to use for your KB from your company's website and paste it in the document you created. If you are copying the content from a website, make sure you only paste the text. Click Save on the top right corner. 
    7. You could also upload a document with public information of your company, simply go to the **Files** tab and select the option **Add File**. Once you upload the file, select the option **Process Files**. 

    ![Profiles](../assets/create_your_own_KB.gif)


??? Note "Use a generic KB"
    1. From the AI Agent Studio, select the notebook icon on the left navigation menu. This is where you will manage your Knowledge Bases. 
    2. Click **Create Knowledge Base**, provide Knowledge base name as <span id="attendee-id">---</span>_AI_KB, then click **Create**.
    3. Go to the **Files** tab and select the option **Add File**. You will find a generic KBs in the Desktop folder, **DrJames_KB.txt**. 
    4. Upload the generic KB and select the option **Process Files**.

    ![Profiles](../assets/DrJames_KB.gif)

### Creating an Autonomous AI Agent

??? Note "Create your AI Agent"
    1. Navigate to **Dashboard** from the right-hand side menu panel and click **Create Agent**
    2. Select **Start from Scratch** and click **Next**
    3. On **Create an AI agent** page select the type of agent: **Autonomous**

    10. New section **Add the essential details** will appear. Provide the following information, then click **Create**:

        > Agent Name: **<span id="attendee-id">---</span>_AutoAgent**
        >
        > System ID is created automatically
        >
        > AI engine: **Webex AI Pro-US 1.0**
        >
        > Knowledge base: **<span id="attendee-id">---</span>_AI_KB**
        > 
        > Agent's goal: 

    11. Once the agent is created, add the **Instructions** to orchestrate how the AI Agent will execute the actions. Here are the details: 

        ```
        ## Identity
        Role Definition: You are a friendly and polite assistant that helps tourists find the best places to eat, drink and have fun.
        Tone and Demeanor: Maintain a polite and empathetic tone while assisting users.

        ##Tasks

        ### Provide recommendations to restaurants, bars and attractions from the KB:
        1.	Ask if they are interested in dinner, drinks or tourist attractions.
        2. Before making a recommendation, check if they have any preference (e.g., "any cuisine preference for dinner?" "do you prefer artistic attractions or more of a outdoors xperience?")
        3. Recommendation should focus only on the name, type of cuisine or type of attraction. Do not include the Address or how to get there.

        ## Offer to place a reservation at the recommended restaurant or bar. Do not offer this option for tourist attractions. 
        1. You need to have the following information to execute the dinner_reservation action: 
        - Number of guests
        - Time of the reservation in US central timezone. 
        - Name of the restaurant or pub
        - Customer name for the reservation 
        - Phone number
        2. Once the reservation is complete, let the user know a confirmation will be send via sms to their mobile, including the address of the restaurant.

        ##Completion:
        •	Ask if the user needs additional help before ending.
        ```


    12. Switch to **Knowledge** tab and from **Knowledge base** drop-down list select **<span class="attendee-id-container"><span class="attendee-id-placeholder" data-suffix="_AI_KB">Your_Attendee_ID</span>_AI_KB<span class="copy" title="Click to copy!"></span></span>**

    13. Click **Save Changes**, then click **Publish**. Provide any version name in popped up window (ex. "1.0").

        ![Profiles](../graphics/Lab1/AITrack_AIAgentCreate.gif)

    14. Switch to the **Actions** tab and click the **New action** button. Proceed to name the action **dinner_reservation**, add a description and select the action scope option called **Slot filling and fulfillment**. 

    15. Create new input entities for the data required to place a reservation, these are the details for each entity: 

        >| Entity Name      | Type     | Value  | Description  |
        >| :--------:       | :-------:| :----: | :---------:  |
        >| reservation_name | string   |    -   | Name on the reservation |
        >| restaurant_name  | String   |    -   | Based on the recommended restaurant for the user |
        >| phone_number     | Phone    | \+?\d{0,3}\s?\(?\d{1,4}\)?[-\s]?\d{1,4}[-\s]?\d{1,4}[-\s]?\d{1,4} | A valid phone number with country code |
        >| number_guests    | number   |    -   | Number of guests attending |
        >| dinner_time      | time     | hh\:mm\:ss | Time of the reservation |
        >| date             | date     | YYYY-mm-dd | User’s preferred date in the given format |

    16. In the **Webex Connect Flow Builder Fulfillment** section, select the **TS_2025** service and the flow **restaurant_reservation**. 

        !!! Warning
            Creating the Webex Connect flow that executes the action is out of scope for this lab. If you are running this lab in your own gold tenant, here's the flow file **TS_2025_rest_reserve**. [Download](https://drive.google.com/drive/folders/   1b8x_om4rQonuJ52wRYif1LPP5qEX4RDI?usp=sharing){:target="_blank"}

        ![Profiles](../graphics/Lab1/AITrack_AIAgent_Action.gif)


??? Note "Create AI Agent using a template"
    1. Navigate to **Dashboard** from the right-hand side menu panel and click **Create Agent**
    2. Select **Start from Scratch** and click **Next**
    3. On **Create an AI agent** page select the type of agent: **Autonomous**

    10. New section **Add the essential details** will appear. Provide the following information, then click **Create**:

        > Agent Name: **<span id="attendee-id">---</span>_AutoAgent**
        >
        > System ID is created automatically
        >
        > AI engine: **Webex AI Pro-US 1.0**
        >
        > Knowledge base: **<span id="attendee-id">---</span>_AI_KB**
        > 
        > Agent's goal: 

    11. Once the agent is created, add the **Instructions** to orchestrate how the AI Agent will execute the actions. Here are the details: 

        ```
        ## Identity
        Role Definition: You are a friendly and polite assistant that helps tourists find the best places to eat, drink and have fun.
        Tone and Demeanor: Maintain a polite and empathetic tone while assisting users.

        ##Tasks

        ### Provide recommendations to restaurants, bars and attractions from the KB:
        1.	Ask if they are interested in dinner, drinks or tourist attractions.
        2. Before making a recommendation, check if they have any preference (e.g., "any cuisine preference for dinner?" "do you prefer artistic attractions or more of a outdoors xperience?")
        3. Recommendation should focus only on the name, type of cuisine or type of attraction. Do not include the Address or how to get there.

        ## Offer to place a reservation at the recommended restaurant or bar. Do not offer this option for tourist attractions. 
        1. You need to have the following information to execute the dinner_reservation action: 
        - Number of guests
        - Time of the reservation in US central timezone. 
        - Name of the restaurant or pub
        - Customer name for the reservation 
        - Phone number
        2. Once the reservation is complete, let the user know a confirmation will be send via sms to their mobile, including the address of the restaurant.

        ##Completion:
        •	Ask if the user needs additional help before ending.
        ```


    12. Switch to **Knowledge** tab and from **Knowledge base** drop-down list select **<span class="attendee-id-container"><span class="attendee-id-placeholder" data-suffix="_AI_KB">Your_Attendee_ID</span>_AI_KB<span class="copy" title="Click to copy!"></span></span>**

    13. Click **Save Changes**, then click **Publish**. Provide any version name in popped up window (ex. "1.0").

        ![Profiles](../graphics/Lab1/AITrack_AIAgentCreate.gif)

    14. Switch to the **Actions** tab and click the **New action** button. Proceed to name the action **dinner_reservation**, add a description and select the action scope option called **Slot filling and fulfillment**. 

    15. Create new input entities for the data required to place a reservation, these are the details for each entity: 

        >| Entity Name      | Type     | Value  | Description  |
        >| :--------:       | :-------:| :----: | :---------:  |
        >| reservation_name | string   |    -   | Name on the reservation |
        >| restaurant_name  | String   |    -   | Based on the recommended restaurant for the user |
        >| phone_number     | Phone    | \+?\d{0,3}\s?\(?\d{1,4}\)?[-\s]?\d{1,4}[-\s]?\d{1,4}[-\s]?\d{1,4} | A valid phone number with country code |
        >| number_guests    | number   |    -   | Number of guests attending |
        >| dinner_time      | time     | hh\:mm\:ss | Time of the reservation |
        >| date             | date     | YYYY-mm-dd | User’s preferred date in the given format |

    16. In the **Webex Connect Flow Builder Fulfillment** section, select the **TS_2025** service and the flow **restaurant_reservation**. 

        !!! Warning
            Creating the Webex Connect flow that executes the action is out of scope for this lab. If you are running this lab in your own gold tenant, here's the flow file **TS_2025_rest_reserve**. [Download](https://drive.google.com/drive/folders/   1b8x_om4rQonuJ52wRYif1LPP5qEX4RDI?usp=sharing){:target="_blank"}

        ![Profiles](../graphics/Lab1/AITrack_AIAgent_Action.gif)


## Testing

14. Click on **Preview** to test your AI Agent and ask for a restaurant recommendation and place a dinner reservation. 

    ![Profiles](../graphics/Lab1/AITrack_AIAgentPreview2.gif)

1. Launch the [Agent Desktop](https://desktop.wxcc-us1.cisco.com/){:target="_blank"} and log in selecting the Desktop option for your Voice connection.
2. On your Agent Desktop, make sure your status is not set to available
      1. Using Webex, place a call to your Inbound Channel number <copy><w class="EPDN"></w></copy>
      2. After you hear the queue treatment start, you can abandon the call 
3. Using Webex, place another call to your Inbound Channel number <copy><w class="EPDN"></w></copy>
4. On your Agent Desktop, set your status to available
      1. You should be offered a call, click on the accept button. (You may want to mute the mic on both Webex and the Agent Desktop)
      2. After a few moments end the call and select a wrapup code.
5. In your Flow:
      1. Open the Debugger
      2. Select the last interaction (at the top of the list)
      3. Trace the steps taken in the flow
6. Answer these questions:
      1. Was the call queued with priority?
         1. Why or why not?
7. Close the Debugger
8. Using Webex, place another call to your Inbound Channel number <copy><w class="EPDN"></w></copy>
9. On your Agent Desktop, set your status to available
      1. You should be offered a call, click on the accept button. (You may want to mute the mic on both Webex and the Agent Desktop)
      2. After a few moments end the call and select a wrapup code.
10. In your Flow:
      1. Open the debugger
      2. Select the last interaction (at the top of the list)
      3. Trace the steps taken in the flow
11. Answer these questions:
      1. Was the call queued with priority?
         1. Why or why not?
      2. If you called another Inbound Channel number with the same flow logic, would your call be prioritized?
         1. How could you change this behavior? 


# Once you have completed the testing, let the instructor know.
---

<script src='../assets/load.js'></script>