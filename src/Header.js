import React from 'react';
 import { makeStyles } from '@material-ui/core/styles';
 import { Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FreedaIcon from './Images/Freeda.svg';
import SearchIcon from './Images/search.svg';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Divider from '@material-ui/core/Divider';
import Body from './Body';
import InputBase from '@material-ui/core/InputBase';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Footer from './Footer';
import LeftIc from './Images/Left.svg';
import RightIc from './Images/Right.svg';
 const useStyles = makeStyles(theme => ({
  
   root:{
     flexGrow:1,
     backgroundColor:'#58687E',
   },
 content: {
   height:'',
   backgroundColor:'#58687E',
    
},
fullWidth: {
  width:'auto',
  backgroundColor:'#58687E',
  

['@media (min-width:1920px)']:{
  width:'94.7vw'
},
['@media (min-width:3840px)']:{
  width:'97vw'
},
},
header: {
  display:'flex',
  fontSize:'2vw',
  color:'#5DAAE0',
  justifyContent:'center',
  
},
headerarrow: {
  marginTop:15,
  marginRight:10,
  marginLeft:10,
  fontSize:'1.9vw',
  color:'white',
 
},
title: {
  fontSize:'1vw',
  color:'#5DAAE0',
},
Icon:{
  width:'3vw',
  ['@media (min-width:1920px)']:{
    width:'3vw',
  },
  ['@media (min-width:3840px)']:{
    width:'5vw',
    height:'7vh',
  },

},
Searchbox:{
  display:'flex',  
  border: '1px solid #5DAAE0',
  borderRadius:'20px',
  alignItems:'center',
  height:'6vh',
  marginTop:'1vh',
  ['@media (min-width:3840px)']:{
    borderRadius:'50px',
    height:'6vh',
    width:'14vw'
  },
},
Searchinput:{
  display:'flex', 
  color: '#FFFFFF80',
 
},


freedadiv:{
  marginTop:'1vh',
  backgroundColor:'#FC7500', 
  width:'9vw',
  borderRadius:'10vw',  
  display:'flex',
  height:'7vh',
  justifyContent:'space-around',
   marginLeft:'12vw',
   ['@media (min-width:1920px)']:{
    width:'8vw',
    height:'7vh',
  },
  ['@media (min-width:3840px)']:{
    width:'10vw',
    height:'7vh',
  },

  },
  
  smallicon:{
    width:'0.40rem',
    height: '0.9rem',
    display:'flex',
    transform:'scale(-1)',
    
  },
  centerbox:{
    display:'flex',
    justifyContent:'center',
    backgroundColor:'#FC7500',
    width:'10.8vw',
    height:'2.6vh',
    border:'1px solid #FC7500 ',
    boxShadow: '0px 3px 6px #00000029',
    borderRadius: '0px 0px 11px 11px',
    marginLeft:'20vw',
    ['@media (min-width:3840px)']:{
      borderRadius:'20px',
      width:'10vw',
       height:'3vh',
     },
  },
  outertab:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-end',
    marginRight:'1vw',
    
  },
  innertab:{
    paddingRight:'1vw',
    paddingLeft:'1vw',
    paddingTop:0,
    marginLeft:'auto',
    marginRight:'auto',
    
    // position:'fixed'
  },
  tabbar:{
    display:'flex',
    justifyContent:'space-between',
    backgroundColor:'#58687E',
    ['@media (min-width:3840px)']:{
     fontSize:'2.5rem'
    },
    
  },
  tabtext:{
    color:'white',
    ['@media (min-width:982px)']:{
      fontSize:'1rem'
     },
    ['@media (min-width:3840px)']:{
      fontSize:'2.3rem'
     },
     
  },
  spanstyle:{
    color:'white',
    fontSize:'1.5rem',
    ['@media (min-width:1920px)']:{
      fontSize:'2rem'
     },
    ['@media (min-width:3840px)']:{
      fontSize:'4rem'
     },
    // [theme.breakpoints.down("xs")]: {
    //   fontSize:'2rem'
    // },
    // [theme.breakpoints.down("sm")]: {
    //   fontSize:'2rem'
    // },
    // [theme.breakpoints.up("md")]: {
    //   fontSize:'2rem'
    // },
    // [theme.breakpoints.up("lg")]: {
    //   fontSize:'2rem'
    // },
    // [theme.breakpoints.up("xl")]: {
    //   fontSize:'2rem'
    // },
     
  },
  centerboxtext:{
    color:'white',fontSize:'0.8vw',
    ['@media (min-width:3840px)']:{
      fontSize:'2rem'
     },
    
  },
 

}));
function Header() {
  const classes = useStyles(); 
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
return (
  <main className={classes.fullWidth}>
    {/* Header */}
    <div >
      <Typography variant='h6'className={classes.header}  >
      <ArrowBackIcon className={classes.headerarrow} />
        Call&nbsp;Workboard  
        <div className={classes.centerbox}>
        <img src={LeftIc} alt="icon" className={classes.smallicon}/>
        <Typography variant='h6' className={classes.centerboxtext} >Autonomous&nbsp;Receivables</Typography>
        <img src={RightIc} alt="icon" className={classes.smallicon}/>
        </div>
        <div style={{marginLeft:'10vw'}} className={classes.Searchbox} >
        <img src={SearchIcon} alt="SearchIcon" className={classes.Icon}  />
        
      <InputBase className={classes.Searchinput} placeholder="Search Name"/>
      <ArrowDropDownIcon />
        </div>
       <div className={classes.freedadiv}>
        <Typography variant='h6'  style={{color:'white',display:'flex', alignItems:'center',fontFamily:'Roboto,Regular' , fontSize:'1.2vw'}}> FREEDA
        <img src={FreedaIcon} alt="FreedaIcon" className={classes.Icon}  />
       </Typography>
       </div>
        </Typography>
    </div>
  {/* Tabs & Summary */}
    <Paper className={classes.tabbar} elevation={0} > 
      <div>
        <div className={classes.align}>
          <Tabs style={{}}
            value={value}
            onChange={handleChange}
            textColor="#5DAAE0"
            position="fixed"    
            
          >
            <Tab label={<span className={classes.tabtext}>TO CALL LIST</span>}/>
            <Tab label={<span className={classes.tabtext}>FINISHED CALL LIST</span>}/>
          
          </Tabs>
        </div>
      </div>
      <div className={classes.outertab}>
            <div className={classes.innertab}>
              <div style={{color:'#FFFFFFA6'}}>
               <span className={classes.spanstyle}>10</span>/30
              </div>
              <div style={{color:'#5DAAE0'}}>
                Total Customer Called 
              </div>
            </div>
            <Divider orientation="vertical" flexItem />
            <div className={classes.innertab}>
              <div style={{color:'#FFFFFFA6'}}>
                <span className={classes.spanstyle}>2</span>
                <span className={classes.spanstyle}>hr</span>
                <span className={classes.spanstyle}>&nbsp;2</span>
                <span className={classes.spanstyle}>min</span>/ 4hr
              </div>

              <div style={{color:'#5DAAE0'}}>
              
                Total Time Spent on Call
              </div>
            </div>
            <Divider orientation="vertical" flexItem />
            <div className={classes.innertab}>
              <div style={{color:'#FFFFFFA6'}}>
              <span className={classes.spanstyle}>$290</span>/$945M
              </div>
              <div style={{color:'#5DAAE0'}}>
                Total Past Due Touched
              </div>
            </div>
      </div>
  </Paper>
 {/* Charts */}
    <div className={classes.content}>
    <Body/>
    </div>
    <div className={classes.footer}>
    <Footer/>
    </div>
  </main>

);
}
export default Header;





