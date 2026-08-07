import {
BookOpen,
Utensils,
Bus,
Wallet,
Calendar,
ClipboardCheck
} from "lucide-react";

const features = [

{
title:"Attendance",
icon:<ClipboardCheck size={40}/>
},

{
title:"Results",
icon:<BookOpen size={40}/>
},

{
title:"Food Ordering",
icon:<Utensils size={40}/>
},

{
title:"Bus Tracking",
icon:<Bus size={40}/>
},

{
title:"Fee Management",
icon:<Wallet size={40}/>
},

{
title:"Events",
icon:<Calendar size={40}/>
}

];

export default function Features(){

return(

<section className="features">

<h2>Everything You Need</h2>

<div className="grid">

{features.map((item,index)=>

<div className="feature-card" key={index}>

<div className="icon">
{item.icon}
</div>

<h3>{item.title}</h3>

<p>
Manage your campus life effortlessly.
</p>

</div>

)}

</div>

</section>

);

}