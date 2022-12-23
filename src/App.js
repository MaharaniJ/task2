import './App.css';
import Pricecard from './component/Pricecart';
function App(){
  let data = [
    {
    plan : "FREE",
    price : "0",
    users : "Single User",
    usersEnabler : true,
    storage : "5GB Storage",
    storageEnabler : true,
   publicproject : "Unlimited Public Projects",
    publicprojectEnabler : true,
    communityaccess : "Community Access",
    communityaccessEnabler : true,
    privateproject : "Unlimited Private Project",
    privateprojectEnabler : false,
    phonesupport : "Dedecated Phone Support",
    phonesupportEnabler : false,
    subdomain : "Free Subdomain",
    subdomainEnabler : false,
    statusreport : "Monthly Status Report",
    statusreportEnabler : false 
  },
   {  plan : "PLUS",
   price : "9",
   users : "5 User",
   usersEnabler : true,
   storage : "50GB Storage",
   storageEnabler : true,
  publicproject : "Unlimited Public Projects",
   publicprojectEnabler : true,
   communityaccess : "Community Access",
   communityaccessEnabler : true,
   privateproject : "Unlimited Private Project",
   privateprojectEnabler : true,
   phonesupport : "Dedecated Phone Support",
   phonesupportEnabler : true,
   subdomain : "Free Subdomain",
   subdomainEnabler : true,
   statusreport : "Monthly Status Report",
   statusreportEnabler : false 
   },

    {
      plan : "PRO",
      price : "49",
      users : "Unlimited User",
      usersEnabler : true,
      storage : "150GB Storage",
      storageEnabler : true,
     publicproject : "Unlimited Public Projects",
      publicprojectEnabler : true,
      communityaccess : "Community Access",
      communityaccessEnabler : true,
      privateproject : "Unlimited Private Project",
      privateprojectEnabler : true,
      phonesupport : "Dedecated Phone Support",
      phonesupportEnabler : true,
      subdomain : "Free Subdomain",
      subdomainEnabler : true,
      statusreport : "Monthly Status Report",
      statusreportEnabler : true 
    
  }]


return <div>
  <section className='Pricecart py-5'>
    <div className='container'>
      <div className='row'>
        { data.map((e,index) =>{
           return     <Pricecard data={e} key={index}/>
        })
      }
        
      </div>
    </div>
  </section>
</div>

}
export default App;