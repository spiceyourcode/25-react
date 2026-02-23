import Tabs from "./tabs";

function TabsTest(){

    function handleChange(){
        
    }
    const tabs =[
        {
            label : 'Tab 1',
            content : <div> This is the content for Tab 1 </div>
        },
        {
            label : 'Tab 2',
            content : <div> This is the content for Tab 2 </div>
        },
        {
            label : 'Tab 3',
            content : <div> This is the content for Tab 3 </div>
        },
    ]
    return <Tabs tabsContent={tabs} onChange={handleChange}></Tabs>
}

export default TabsTest;
