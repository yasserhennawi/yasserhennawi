import React from 'react';
import Facebook from 'components/icons/Facebook';
import Phone from 'components/icons/Phone';
import Twitter from 'components/icons/Twitter';
import Linkedin from 'components/icons/Linkedin';
import Github from 'components/icons/Github';
import Email from 'components/icons/Email';

export default {
  contactItems: [
    {
      url: 'facebook.com/yasserahennawi',
      logo: <Facebook />,
      bgColor: 'rgb(59,89,152)',
    },
    {
      url: 'twitter.com/YasserHennawi',
      logo: <Twitter />,
      bgColor: '#0084b4',
    },
    {
      url: 'linkedin.com/in/YasserHennawi',
      logo: <Linkedin />,
      bgColor: '#0077B5',
    },
    {
      url: 'github.com/YasserHennawi',
      logo: <Github />,
      bgColor: '#323131',
    },
    {
      url: '+20 127 5916 291 ',
      logo: <Phone />,
      bgColor: '#607D8B',
      isClickable: false,
    },
    {
      url: 'yahennawi@gmail.com',
      logo: <Email />,
      bgColor: '#DD4B3E',
      isClickable: false,
    },
  ],
};
