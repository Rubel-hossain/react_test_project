### Hydroponic Sensoring within Cannibus Industries

As of 2021, cannabis is legal to grow within designated green zones or by med card holders in 18 states. Most growers start as local caregivers using basements, attics, and smaller rooms with custom air filters, ventilation systems, and humidity control. Many manual tasks are involved in nutrient mixing, pest control, potting and pruning. Deviations in atmospheric conditions as well as downtime of several components in smaller custom setups can cause significant damage to plant health. Here, we analyze three common systems used for small and mid-tier growers as they transition to additional sensoring automation due to labor demands. 


### Yolink

Often, local systems like Yolink are used with a subscription-based structure to control light and temperature sensors using local Wi-Fi networks.
Figure 1: Yolink offerings at https://www.yosmart.com/
![Asset 1](https://user-images.githubusercontent.com/84352976/120904814-0d94f700-c603-11eb-813f-63cbd14357f2.PNG)

A gas/water valve controller on amazon can go for $64.99 and there is a collection of 20 to 30 reasonably priced end to end sensor solutions. A prebuilt Yolink app is used to link all existing sensors and provide analytics. 
Yolink sensors are generally home automation focused with smart-plugs, light and water management solutions as the focus for small grower integration. A system of Yolink smart-plugs can be used to configure on-off for humidity and light environments within the grow system. In-house dashboarding and analytics provide a live view and email alerts on certain thresholds, though actuation of sensors still needs to be manual within the Yolink system. There is no storage option for historical data and premium features will cost additional money within the app. 

### Mycodo

Mycodo is a popular open-source framework featuring an app GPIO framework for hydroponic growing. 
A quick scan of the mycodo software shows the following configurable IO options to enable both input and output of common grow conditions. The product is slick, providing rich dashboarding, customizable logic apps, and alerting features. (Figure 2)

Figure 2: mycodo dashboarding 
![image](https://user-images.githubusercontent.com/84352976/120904847-492fc100-c603-11eb-8dcc-f514295c6cf6.png)

Features per mycodo demo in: https://kylegabriel.com/projects/2020/06/automated-hydroponic-system-build.html)
* Measure air conditions: temperature, humidity, vapor pressure deficit, and carbon dioxide (CO2).
* Control relays to modulate lights, air exhaust fan, and humidifier.
* Control four peristaltic pumps to dispense specific volumes of solutions: acid, base, nutrient A, and nutrient B.
* Automatically adjust water to target pH range by dispensing acid/base solutions.
* Automatically adjust water to target electrical conductivity range by dispensing nutrient solutions.
* Automatically adjust air to target humidity, temperature, and CO2 concentration ranges by modulating an exhaust fan and humidifier.
Automatically regulate air vapor pressure deficit (VPD) with a humidifier and exhaust fan, using a PID controller.

This is far more IO options than Yolink and the control mechanisms resemble that of SCADA systems for proper nutrient dosing.  Local and cloud-based app hosting allows access via phone through router port forwarding options and data can be written to local/cloud containers for access. However, there is no system to easily retrieve and visualize log data. The mycodo system is free and judging by GitHub forks there is large following with software regularly maintained by the owner and a team of contributors. 

### Azure IoT

An Azure IoT system (Figure 3) uses a combination of local Pi systems and cloud systems to provide cloud based sensoring, IO control, and dashboarding. The main difference between this solution and mycodo is the ability to access historical data for analysis and experimentation purposes. Azure systems also have more robust alerting on local downtimes as mycodo cannot send alerts on sensor downtime over cloud systems (think email and text SMS messages).

Figure 3: Azure based IoT System 
![image](https://user-images.githubusercontent.com/84352976/120904886-7b412300-c603-11eb-8179-c97a88dc4f3a.png)

However, this is a very custom build where each piece would need to be built per spec. Storage of historical data is charged pay-as-you-go with azure data lake storage costing around $0.039 per GB. Computing/the building of custom apps are more expensive, and cost depends on the efficiency in the provisioning of cloud resources. 
Overall, the benefit of the three solutions is summarized below:

|                | Local Paid Systems (Yolink)                 | Local Open-Source Systems (mycodo)              | Cloud Based Systems (Azure IoT hub + Pi)                    |
|----------------|---------------------------------------------|-------------------------------------------------|-------------------------------------------------------------|
| Network        | Local Wi-fi based Network and in-app access | Local Wifi based Network with Port forwarding   | Cloud based Network, customizable apps                      |
| Storage        | No in-app Storage options                   | Local Storage options                           | Cheap Cloud Storage options                                 |
| Sensor Options | Suite of Rigid Sensors                      | Customizable IO to integrate with app framework | Event-hub/ GPIO based integration                           |
| Analytics      | In-house dashboarding and analytics options | mycodo custom dashboards                        | Customizable Dashboarding and Alerting options + logic apps |
| Cost           | Flat Subscription Structure                 | Free                                            | Pay-as-you-go                                               |

Local Paid systems such as Yolink are very fragmented and often require multiple apps to manage operations. Actuation is lacking and custom toggles/monitoring needs to be done to maintain plant health.

Open source like mycodo is promising for creating floor level dashboards and app solutions to create SCADA like systems for overall management. The rich GPIO of SCADA like systems allows for dosing automation and feedback actuation to be implemented. However, there’s poor cloud integration and app hosting of SCADA systems does not allow clean integration with cloud services. 
Full azure systems provide the best of both worlds, yet they are very custom and take time to build. Using azure, service level is backed by an 99.995% SLA for most logic apps and 99.9995% for storage access. This is a good choice as a cheap alternative to industrial sensoring for larger growers and smaller research labs seeking advanced analytics and research on crop conditions. The bulk of azure systems come in setup-cost and pay-as-you-go usage. 

### Contact

OptimChain can help you configure either one of these three systems depending on automation familiarity, stability concerns, and existing infrastructure. Reach out to schedule a consultation!

Email: cloud@optimchain.org
Phone: 734-730-6569
















