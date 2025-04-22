import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function ListedBook() {
    return (
        <div className='w-3/4 mx-auto my-10'>
            <Tabs>
                <TabList className='bg-amber-200 mb-3'>
                    <Tab>Title 1</Tab>
                    <Tab>Title 2</Tab>
                    <Tab>Title 2</Tab>
                    <Tab>Title 2</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta eos amet pariatur veritatis dolores? Voluptatum velit quidem id totam vitae tempora rem unde, voluptates odit labore blanditiis, excepturi cupiditate fugiat!</p>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    )
}
