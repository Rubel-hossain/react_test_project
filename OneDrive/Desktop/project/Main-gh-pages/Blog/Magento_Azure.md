
### Magento into Warehouse and PBI

Figure 1 shows a typical cloud-based warehouse landscape with Data Factories, Data Lakes, and Power BI. In the Magento 2 Community Edition case, we can use data factory to copy Magento tables. Refer to the below documentation in Link 1 for an azure Magento connector. You can host a python SDK within Data Factory to build this pipeline. Link 2 contains how to host the python code via azure data-factory.

**Figure 1:** End to End cloud stack

![magento snip 1](https://user-images.githubusercontent.com/84352976/124342566-95760e80-db79-11eb-9c40-a09131a14acc.PNG)

**Link 1:** https://docs.microsoft.com/en-us/azure/data-factory/connector-magento

**Link 2:** https://docs.microsoft.com/en-us/azure/batch/tutorial-run-python-batch-azure-data-factory

With the above, we can then deposit Magento tables into Azure Datalake and mount PowerBi analytics on-top. Bi can be refreshed daily to pull the newest Magento tables as shown in Figure 2.

**Figure 2:** Simple Magento PBI stack

![magento snip 2](https://user-images.githubusercontent.com/84352976/124342571-9c048600-db79-11eb-8b88-3e96af414646.PNG)

With this approach, the raw tables would be stored in Azure Datalake with an easy to access GUI (Figure 3) via your cloud portal. Datalake is used because of how cheap it is to simple tables without established schemas. Magento would already reinforce the schemas, so there is no need for additional systems here. 

**Figure 3:** Storage Explorer GUI

![magento snip 3](https://user-images.githubusercontent.com/84352976/124342579-a7f04800-db79-11eb-84a8-491053f00aa8.PNG)


Within, PBI, you can then pull data lake raw tables. If the data factory refreshes those tables, they will deposit in the same location to be pulled up by PowerBI (Figure 4). The old files will then be moved to archive.
*	Current Directory (PBI mount is here)
*	Archive
    * YYY
      * M1
      * M2
         * Day 1
         * Day 2

**Figure 4:** PBI Datalake connector

![magento snip 4](https://user-images.githubusercontent.com/84352976/124342583-acb4fc00-db79-11eb-8a88-26db92900dfd.PNG)


After you finish pulling the data, you can use PowerBi to do view transformations and write additional queries for analytics. The data should be all here for you to play around with. (Figure 5)

**Figure 5:** PBI view building

![magento snip 5](https://user-images.githubusercontent.com/84352976/124342586-af175600-db79-11eb-858d-7e3ab6d76b93.PNG)
