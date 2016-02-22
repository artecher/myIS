'use strict';

angular.module('starter').controller('HeadlineCtrl', function ($http, $scope, $q, $timeout) {

  var that = this;

  that.current = 1;

  var timeoutHandler = null;

  var data = [{
    "id": 974,
    "type": "post",
    "slug": "auckland-bus-strikes-on-friday",
    "url": "http:\/\/innerspark-wp.spark.co.nz\/auckland-bus-strikes-on-friday\/",
    "status": "publish",
    "title": "Auckland bus strikes on Friday",
    "title_plain": "Auckland bus strikes on Friday",
    "content": '<p>This Friday it’s expected that there will be a bus strike in Auckland, this means bus services will be disrupted so we’re letting you know what to do in the event that this impacts you travelling to and from work.</p>\n<p>More than 1,000 NZ Bus drivers and 70 Howick &amp; Eastern drivers will be striking from 4am Friday to 4am Saturday.</p>\n<p>Nearly 100,000 commuters and about 120 school buses will be affected by the 24 hour work stoppage. Specific services affected are: MetroLink, Link, GoWest, NorthStar, WakaPacific, Howick &amp; Eastern and many school buses.</p>\n<hr />\n<p><strong>What to do</strong></p>\n<p>Firstly we suggest taking an alternative mode of transport if you can. Options include car pooling with people from your area, travelling by train, ferry, bike or on foot. Whatever you decide to do, please allow for a longer travel time.</p>\n<p>If you bus (and/or your children are affected by the school bus service issue), please talk to your manager about doing one of the following:</p>\n<ul>\n<li>Travelling and working at off peak hours</li>\n<li>Working remotely</li>\n<li>Taking annual leave</li>\n</ul>\n<p>Please note, the option you choose will need to work for your manager, team and the job that you do.</p>\n<p>If you need any further information, ask your manager.</p>\n<p>To keep up to date with the planned strike you can check out <a href="https://at.govt.nz/">the Auckland transport website.</a></p>\n<p>If the strike is cancelled before Friday, please expect a usual work day.</p>\n',
    "excerpt": "<p>Find out what this means for you if you live in Auckland.<\/p>\n",
    "date": "2016-02-16 14:50:11",
    "modified": "2016-02-16 14:50:11",
    "categories": [{
      "id": 2,
      "slug": "sparknews",
      "title": "Spark News",
      "description": "",
      "parent": 0,
      "post_count": 276
    }],
    "tags": [{
      "id": 150,
      "slug": "auckland-only",
      "title": "Auckland only",
      "description": "",
      "post_count": 3
    }],
    "author": {
      "id": 9,
      "slug": "courtney-bennett",
      "name": "Courtney Bennett",
      "first_name": "Courtney",
      "last_name": "Bennett",
      "nickname": "courtney.bennett",
      "url": "",
      "description": ""
    },
    "comments": [],
    "attachments": [],
    "comment_count": 0,
    "comment_status": "open",
    "thumbnail": "http:\/\/innerspark-wp.spark.co.nz\/wp-content\/uploads\/2015\/12\/auckland-transport-bus-825x510.jpg",
    "custom_fields": {},
    "thumbnail_size": "post-thumbnail",
    "thumbnail_images": {
      "full": {
        "url": "http:\/\/innerspark-wp.spark.co.nz\/wp-content\/uploads\/2015\/12\/auckland-transport-bus.jpg",
        "width": 1300,
        "height": 700
      },
      "thumbnail": {
        "url": "http:\/\/innerspark-wp.spark.co.nz\/wp-content\/uploads\/2015\/12\/auckland-transport-bus-150x150.jpg",
        "width": 150,
        "height": 150
      },
      "medium": {
        "url": "http:\/\/innerspark-wp.spark.co.nz\/wp-content\/uploads\/2015\/12\/auckland-transport-bus-300x162.jpg",
        "width": 300,
        "height": 162
      },
      "post-thumbnail": {
        "url": "http:\/\/innerspark-wp.spark.co.nz\/wp-content\/uploads\/2015\/12\/auckland-transport-bus-825x510.jpg",
        "width": 825,
        "height": 510
      }
    }
  }, {
    "id": 971,
    "type": "post",
    "slug": "media-wrap-up-tuesday-16-february-2016",
    "url": "http:\/\/innerspark-wp.spark.co.nz\/media-wrap-up-tuesday-16-february-2016\/",
    "status": "publish",
    "title": "Media Wrap-up: Tuesday 16 February 2016",
    "title_plain": "Media Wrap-up: Tuesday 16 February 2016",
    "content": '<p>Today’s wrap-up contains all the top Spark news stories from over the past 24 hours. Catch summaries about everything from Spark coverage issues, to Apple’s new TV series right here.</p>\n<hr />\n<p><strong>Today&#8217;s Top Stories:</strong></p>\n<p><strong>16/02, Timaru Herald &#8211; <a href="http://sparknz.us11.list-manage.com/track/click?u=468f08982f2566b323142e64a&amp;id=cc6bf3500a&amp;e=532fc3c6ba">&#8220;</a></strong><a href="http://sparknz.us11.list-manage2.com/track/click?u=468f08982f2566b323142e64a&amp;id=e42cdf63e5&amp;e=532fc3c6ba">Climbing up hill to get Geraldine coverage&#8221;</a> — Trying to get a cellphone signal is a bit of a mission for some Beautiful Valley residents, about 20 kilometres from Geraldine in South Canterbury. Some residents have paid for satellites to get internet access to their Geraldine-Fairlie Highway properties. Farmer Roger Horn says that Spark is his cellphone provider, but he only gets coverage up the hill on his farm. He does not have coverage at his house, and along the highway there are many blank patches.</p>\n<p><strong>16/02, Stuff- <a href="http://sparknz.us11.list-manage.com/track/click?u=468f08982f2566b323142e64a&amp;id=7547d43441&amp;e=532fc3c6ba">&#8220;</a></strong><a href="http://sparknz.us11.list-manage.com/track/click?u=468f08982f2566b323142e64a&amp;id=d61cd09abc&amp;e=532fc3c6ba">India just banned &#8216;zero rated&#8217; Facebook. We should too<strong>&#8220;</strong> </a>— Henry Cooke discusses net neutrality and India’s decision to ban Facebook&#8217;s &#8220;free basics&#8221; programme. He says that Facebook and Twitter have already negotiated differentiated access to Kiwis, using Spark&#8217;s &#8220;socialiser&#8221; service as an example. The socialiser service lets prepay customers pay $9 for a whole gig of data &#8211; that can only be used on Facebook or Twitter. Cooke says services like the one above disadvantage any new social networks.</p>\n<p><strong>15/02, NZ Herald &#8211; <a href="http://sparknz.us11.list-manage1.com/track/click?u=468f08982f2566b323142e64a&amp;id=aa64a74d8e&amp;e=532fc3c6ba">&#8220;</a></strong><a href="http://sparknz.us11.list-manage2.com/track/click?u=468f08982f2566b323142e64a&amp;id=080fb6b67c&amp;e=532fc3c6ba">Quake fails to shake Christchurch business<strong>&#8220;</strong></a> — The telecommunications system was mostly unaffected by Christchurch’s 5.7 earthquake.  Chorus and Vodafone reporting no network outages. Spark reported that 34 of its mobile sites were hit by congestion as people tried to get in touch with family and friends but this was fixed within a few hours.</p>\n<hr />\n<p><strong>Industry News:</strong></p>\n<p><strong>15/02, Stuff &#8211; <a href="http://sparknz.us11.list-manage.com/track/click?u=468f08982f2566b323142e64a&amp;id=f2c4d0c1f5&amp;e=532fc3c6ba">&#8220;</a></strong><a href="http://sparknz.us11.list-manage.com/track/click?u=468f08982f2566b323142e64a&amp;id=081ab6398f&amp;e=532fc3c6ba">Demand for ultrafast broadband soars</a><strong><a href="http://sparknz.us11.list-manage.com/track/click?u=468f08982f2566b323142e64a&amp;id=1ad9547174&amp;e=532fc3c6ba">&#8220;</a> </strong>— The number of UFB connections has jumped from 69,000 to 162,000 over the course of the year, with homes and businesses now connecting at a rate of about 12,000 a month. The number of premises able to connect to the network rose 54 per cent to 875,000, while the take-up rate increased from 11.3 per cent to 18.6 per cent. The accelerating take-up of UFB is expected to impact Chorus&#8217; financial forecasts when it reports its interim results on Friday.</p>\n<p><strong>15/02, Beehive.govt.nz &#8211; <a href="http://sparknz.us11.list-manage.com/track/click?u=468f08982f2566b323142e64a&amp;id=1e91d39cd5&amp;e=532fc3c6ba">&#8220;</a></strong><a href="http://sparknz.us11.list-manage2.com/track/click?u=468f08982f2566b323142e64a&amp;id=3d72277e47&amp;e=532fc3c6ba">Steady progress in rural broadband rollout<strong>&#8220;</strong> </a>— Communications Minister Amy Adams says the Government’s Rural Broadband Initiative (RBI) is making steady progress, with 87 per cent of new and upgraded towers complete. 280,000 rural households and businesses can now access fixed wireless or improved fixed line broadband.</p>\n<hr />\n<p><strong>Other News:</strong></p>\n<p><strong>16/02, Timaru Herald &#8211; <a href="http://sparknz.us11.list-manage.com/track/click?u=468f08982f2566b323142e64a&amp;id=d34c8b9d7f&amp;e=532fc3c6ba">&#8220;</a></strong><a href="http://sparknz.us11.list-manage2.com/track/click?u=468f08982f2566b323142e64a&amp;id=a177887708&amp;e=532fc3c6ba">Increasing number of driving complaints made to police<strong>&#8220;</strong></a> —Southern motorists are increasingly dobbing-in bad drivers to police. Figures show calls to the police *555 reporting line from South Canterbury and North Otago over the Christmas period rose by 76 per cent between 2011/12 and 2015/16. Senior Sergeant Mark Offen said that better cellphone coverage in some areas may have led to more calls coming through. Spark’s plans to fast-track 4G in Canterbury is expected to increase coverage in rural and remote areas.</p>\n<p><strong>16/02, Stuff- <a href="http://sparknz.us11.list-manage.com/track/click?u=468f08982f2566b323142e64a&amp;id=4447146089&amp;e=532fc3c6ba">&#8220;</a></strong><a href="http://sparknz.us11.list-manage.com/track/click?u=468f08982f2566b323142e64a&amp;id=8ffe3e86d1&amp;e=532fc3c6ba">DVDs are dead, and TV might be next<strong>&#8220;</strong> </a>— A Stuff opinion piece says that local video stores are closing down and TV stations might be next. More Kiwis are getting ultrafast broadband and soon many people will be able to stream 4K over the internet. It&#8217;s now the second year that Netflix, Lightbox and Neon have been available in New Zealand. If TV broadcasters like TVNZ and TV3 follow a similar trend to DVDs, they have eight years left.</p>\n<p><strong>16/02, NZ Herald &#8211; <a href="http://sparknz.us11.list-manage.com/track/click?u=468f08982f2566b323142e64a&amp;id=96b3afdf83&amp;e=532fc3c6ba">&#8220;</a></strong><a href="http://sparknz.us11.list-manage.com/track/click?u=468f08982f2566b323142e64a&amp;id=4a5ee777d2&amp;e=532fc3c6ba">Why more people could fall in love with Apple&#8217;s new TV series than you think<strong>&#8220;</strong> </a>— Apple is taking a page out of Netflix and Amazon&#8217;s playbook, creating an original TV series called &#8220;Vital Signs&#8221; featuring Dr. Dre, according to the Hollywood Reporter, which quoted multiple anonymous sources on the matter. The show is being produced as a six-episode series and is described as dark and semi-autobiographical.</p>\n',
    "excerpt": '<p>Today’s wrap-up contains all the top Spark news stories from over the past 24 hours. Catch summaries about everything from Spark coverage issues, to Apple’s new TV series right here.</p>\n',
    "date": "2016-02-16 14:49:03",
    "modified": "2016-02-16 14:49:03",
    "categories": [{
      "id": 4,
      "slug": "industrynews",
      "title": "Industry News",
      "description": "",
      "parent": 0,
      "post_count": 125
    }],
    "tags": [{
      "id": 46,
      "slug": "media-wrap-up",
      "title": "Media Wrap-Up",
      "description": "",
      "post_count": 119
    }],
    "author": {
      "id": 12,
      "slug": "indy-lane",
      "name": "Indy Lane",
      "first_name": "Indy",
      "last_name": "Lane",
      "nickname": "indy.lane",
      "url": "",
      "description": ""
    },
    "comments": [],
    "attachments": [{
      "id": 1972,
      "url": "http:\/\/innerspark-wp.spark.co.nz\/wp-content\/uploads\/2016\/02\/farm-gate.jpg",
      "slug": "olympus-digital-camera-3",
      "title": "OLYMPUS DIGITAL CAMERA",
      "description": "",
      "caption": "OLYMPUS DIGITAL CAMERA",
      "parent": 1971,
      "mime_type": "image\/jpeg",
      "images": {
        "full": {
          "url": "http:\/\/innerspark-wp.spark.co.nz\/wp-content\/uploads\/2016\/02\/farm-gate.jpg",
          "width": 1300,
          "height": 700
        },
        "thumbnail": {
          "url": "http:\/\/innerspark-wp.spark.co.nz\/wp-content\/uploads\/2016\/02\/farm-gate-150x150.jpg",
          "width": 150,
          "height": 150
        },
        "medium": {
          "url": "http:\/\/innerspark-wp.spark.co.nz\/wp-content\/uploads\/2016\/02\/farm-gate-300x162.jpg",
          "width": 300,
          "height": 162
        },
        "post-thumbnail": {
          "url": "http:\/\/innerspark-wp.spark.co.nz\/wp-content\/uploads\/2016\/02\/farm-gate-825x510.jpg",
          "width": 825,
          "height": 510
        }
      }
    }],
    "comment_count": 0,
    "comment_status": "open",
    "thumbnail": "http:\/\/innerspark-wp.spark.co.nz\/wp-content\/uploads\/2016\/02\/farm-gate-825x510.jpg",
    "custom_fields": {},
    "thumbnail_size": "post-thumbnail",
    "thumbnail_images": {
      "full": {
        "url": "http:\/\/innerspark-wp.spark.co.nz\/wp-content\/uploads\/2016\/02\/farm-gate.jpg",
        "width": 1300,
        "height": 700
      },
      "thumbnail": {
        "url": "http:\/\/innerspark-wp.spark.co.nz\/wp-content\/uploads\/2016\/02\/farm-gate-150x150.jpg",
        "width": 150,
        "height": 150
      },
      "medium": {
        "url": "http:\/\/innerspark-wp.spark.co.nz\/wp-content\/uploads\/2016\/02\/farm-gate-300x162.jpg",
        "width": 300,
        "height": 162
      },
      "post-thumbnail": {
        "url": "http:\/\/innerspark-wp.spark.co.nz\/wp-content\/uploads\/2016\/02\/farm-gate-825x510.jpg",
        "width": 825,
        "height": 510
      }
    }
  }, {
    "id": 969,
    "type": "post",
    "slug": "air-tahiti-nui-has-two-return-tickets-to-giveaway",
    "url": "http:\/\/innerspark-wp.spark.co.nz\/air-tahiti-nui-has-two-return-tickets-to-giveaway\/",
    "status": "publish",
    "title": "Air Tahiti Nui has two return tickets to giveaway",
    "title_plain": "Air Tahiti Nui has two return tickets to giveaway",
    "content": '<p>With beautiful beaches, amazing wildlife, and plenty of breath taking surf spots &#8211; Tahiti has all the ingredients for a great holiday.</p>\n<p>Spark staff and their families already get an awesome deal on Air Tahiti Nui’s published fares (20% discount on normal retail fares) when booking through theSpark link to the Air Tahiti Nui website.</p>\n<p>But to make that trip away seem even more enticing, the wonderful people at Air Tahiti Nui are offering Spark employees the chance to win two return economy class tickets between Auckland and Tahiti (Papeete)- valid until 30 June 2017.</p>\n<p>All you need to do is take a look at the questions below and send the answers through (along with your name and email address) to fspooner@airtahitinui.co.nz using the subject line “SPARK COMPETITION”.</p>\n<p>The answers to both questions can be found on the Air Tahiti Nui Deals 4U page. Which means, it’s the perfect time to check out our standing deal with Air Tahiti Nui, and pencil in that dream getaway you’ve been thinking about.</p>\n<hr />\n<p>Question 1:</p>\n<p>What is the discount offered to Spark NZ Staff &amp; Family?</p>\n<p>Question 2:</p>\n<p>Name the 3 x destinations Air Tahiti Nui flies to?</p>\n<hr />\n<p>As an added bonus, anyone who books and pays online for tickets through the special Air Tahiti Nui Spark landing page gets an extra entry into the competition – simply email in a copy of your booking along with your entry to qualify.</p>\n<p>The winners winner will be drawn on 30 June 2016.</p>\n<p>Giveaway terms and conditions:</p>\n<ul>\n<li>The offer is valid to all current Spark staff.</li>\n<li>Tickets are valid for travel completed by 29 June 2017</li>\n<li>The prize is for 2 x Air Tahiti Nui airfares from Auckland &amp; does not include NZ domestic airfares &#8211; or accommodation (which must be organised independently).<br />\nEconomy class seats are subject to availability at time of booking, and seats may not be available on every flight.</li>\n<li>Closeouts may apply during Peak holiday periods including but not limited to: Christmas, New Year, Easter, long weekends, &amp; school holidays.</li>\n<li>Flights operated by other “code-share” partner airlines cannot be used with this prize.</li>\n<li>Government taxes and border/airport levies are not included as part of this prize, and these are payable to Air Tahiti Nui at the time of booking. (Approximately $120 per person)</li>\n<li>Changes made once tickets have been issued = $50 per ticket, per change</li>\n<li>Cancellation within 7 days of departure is NOT permitted.</li>\n<li>This voucher is non-transferable, has NIL cash value, is not valid for resale – tickets cannot be traded.</li>\n<li>Valid for the number of persons stipulated who must travel together on the same itinerary/flights/dates</li>\n<li>Copy of valid passport(s) will be required when booking, and correct documentation is required for entry into French Polynesia.<br />\n<hr />\n<p>Air Tahiti Nui’s comprehensive Terms and Conditions of Carriage apply. Refer to the website or contact Air Tahiti Nui for full details. www.airtahitinui.co.nz</li>\n</ul>\n',
    "excerpt": "<p>Planning your next holiday? Air Tahiti Nui has a special promo offer for Spark Staff.<\/p>\n",
    "date": "2016-02-15 15:46:03",
    "modified": "2016-02-15 15:46:03",
    "categories": [{
      "id": 2,
      "slug": "sparknews",
      "title": "Spark News",
      "description": "",
      "parent": 0,
      "post_count": 276
    }],
    "tags": [{
      "id": 110,
      "slug": "deals4u",
      "title": "Deals4U",
      "description": "",
      "post_count": 6
    }, {
      "id": 32,
      "slug": "travel",
      "title": "Travel",
      "description": "",
      "post_count": 10
    }],
    "author": {
      "id": 9,
      "slug": "courtney-bennett",
      "name": "Courtney Bennett",
      "first_name": "Courtney",
      "last_name": "Bennett",
      "nickname": "courtney.bennett",
      "url": "",
      "description": ""
    },
    "comments": [{
      "id": 1694,
      "name": "appTest",
      "url": "",
      "date": "2016-02-15 23:49:38",
      "content": "<p>LIKE:Juliet Pearce<\/p>\n",
      "parent": 0,
      "author": {
        "id": 7,
        "slug": "apptest",
        "name": "App Test",
        "first_name": "App",
        "last_name": "Test",
        "nickname": "appTest",
        "url": "",
        "description": ""
      }
    }, {
      "id": 1695,
      "name": "appTest",
      "url": "",
      "date": "2016-02-15 23:51:43",
      "content": "<p>LIKE:Callum McLeod<\/p>\n",
      "parent": 0,
      "author": {
        "id": 7,
        "slug": "apptest",
        "name": "App Test",
        "first_name": "App",
        "last_name": "Test",
        "nickname": "appTest",
        "url": "",
        "description": ""
      }
    }, {
      "id": 1696,
      "name": "appTest",
      "url": "",
      "date": "2016-02-16 08:34:31",
      "content": "<p>LIKE:Joe McCollum<\/p>\n",
      "parent": 0,
      "author": {
        "id": 7,
        "slug": "apptest",
        "name": "App Test",
        "first_name": "App",
        "last_name": "Test",
        "nickname": "appTest",
        "url": "",
        "description": ""
      }
    }, {
      "id": 1697,
      "name": "appTest",
      "url": "",
      "date": "2016-02-16 08:34:32",
      "content": "<p>LIKE:Joe McCollum<\/p>\n",
      "parent": 0,
      "author": {
        "id": 7,
        "slug": "apptest",
        "name": "App Test",
        "first_name": "App",
        "last_name": "Test",
        "nickname": "appTest",
        "url": "",
        "description": ""
      }
    }, {
      "id": 1699,
      "name": "appTest",
      "url": "",
      "date": "2016-02-16 10:59:52",
      "content": "<p>LIKE:Fiona German<\/p>\n",
      "parent": 0,
      "author": {
        "id": 7,
        "slug": "apptest",
        "name": "App Test",
        "first_name": "App",
        "last_name": "Test",
        "nickname": "appTest",
        "url": "",
        "description": ""
      }
    }, {
      "id": 1700,
      "name": "appTest",
      "url": "",
      "date": "2016-02-16 11:15:46",
      "content": "<p>LIKE:Indya Lane<\/p>\n",
      "parent": 0,
      "author": {
        "id": 7,
        "slug": "apptest",
        "name": "App Test",
        "first_name": "App",
        "last_name": "Test",
        "nickname": "appTest",
        "url": "",
        "description": ""
      }
    }, {
      "id": 1701,
      "name": "appTest",
      "url": "",
      "date": "2016-02-16 11:53:17",
      "content": "<p>LIKE:Sandi Thomas<\/p>\n",
      "parent": 0,
      "author": {
        "id": 7,
        "slug": "apptest",
        "name": "App Test",
        "first_name": "App",
        "last_name": "Test",
        "nickname": "appTest",
        "url": "",
        "description": ""
      }
    }],
    "attachments": [{
      "id": 1970,
      "url": "http:\/\/innerspark-wp.spark.co.nz\/wp-content\/uploads\/2016\/02\/Air-Tahiti-Nui1300x700.jpg",
      "slug": "air-tahiti-nui1300x700",
      "title": "Air Tahiti Nui1300x700",
      "description": "",
      "caption": "",
      "parent": 1969,
      "mime_type": "image\/jpeg",
      "images": {
        "full": {
          "url": "http:\/\/innerspark-wp.spark.co.nz\/wp-content\/uploads\/2016\/02\/Air-Tahiti-Nui1300x700.jpg",
          "width": 1300,
          "height": 700
        },
        "thumbnail": {
          "url": "http:\/\/innerspark-wp.spark.co.nz\/wp-content\/uploads\/2016\/02\/Air-Tahiti-Nui1300x700-150x150.jpg",
          "width": 150,
          "height": 150
        },
        "medium": {
          "url": "http:\/\/innerspark-wp.spark.co.nz\/wp-content\/uploads\/2016\/02\/Air-Tahiti-Nui1300x700-300x162.jpg",
          "width": 300,
          "height": 162
        },
        "post-thumbnail": {
          "url": "http:\/\/innerspark-wp.spark.co.nz\/wp-content\/uploads\/2016\/02\/Air-Tahiti-Nui1300x700-825x510.jpg",
          "width": 825,
          "height": 510
        }
      }
    }],
    "comment_count": 7,
    "comment_status": "open",
    "thumbnail": "http:\/\/innerspark-wp.spark.co.nz\/wp-content\/uploads\/2016\/02\/Air-Tahiti-Nui1300x700-825x510.jpg",
    "custom_fields": {},
    "thumbnail_size": "post-thumbnail",
    "thumbnail_images": {
      "full": {
        "url": "http:\/\/innerspark-wp.spark.co.nz\/wp-content\/uploads\/2016\/02\/Air-Tahiti-Nui1300x700.jpg",
        "width": 1300,
        "height": 700
      },
      "thumbnail": {
        "url": "http:\/\/innerspark-wp.spark.co.nz\/wp-content\/uploads\/2016\/02\/Air-Tahiti-Nui1300x700-150x150.jpg",
        "width": 150,
        "height": 150
      },
      "medium": {
        "url": "http:\/\/innerspark-wp.spark.co.nz\/wp-content\/uploads\/2016\/02\/Air-Tahiti-Nui1300x700-300x162.jpg",
        "width": 300,
        "height": 162
      },
      "post-thumbnail": {
        "url": "http:\/\/innerspark-wp.spark.co.nz\/wp-content\/uploads\/2016\/02\/Air-Tahiti-Nui1300x700-825x510.jpg",
        "width": 825,
        "height": 510
      }
    }
  }, {
    "id": 965,
    "type": "post",
    "slug": "the-pariscope-happy-chinese-new-year",
    "url": "http:\/\/innerspark-wp.spark.co.nz\/the-pariscope-happy-chinese-new-year\/",
    "status": "publish",
    "title": "The Pariscope: Happy Chinese New Year!",
    "title_plain": "The Pariscope: Happy Chinese New Year!",
    "content": '<p>Hi guys,</p>\n<p>In this week’s update I’m with Caren and Jay from our One World team as they celebrate Chinese New Year.</p>\n<p>Our One World team is made up of Customer Service Representatives who specialise in providing service for a variety of ethnic communities in NZ.</p>\n<p>The team speaks Mandarin, Cantonese and Korean and in this update they talk about their team and about their customers.</p>\n<p>Recognition this week goes to Isabella Ouano from our Riccarton store who went above and beyond to help a customer. The customer then contacted me to say what a superstar she is, great work Isabella!</p>\n<p>Happy Chinese New Year everyone!</p>\n<p>Cheers, JP</p>\n<p><iframe width="660" height="371" src="https://www.youtube.com/embed/cDwnmJ6_CYo?feature=oembed" frameborder="0" allowfullscreen></iframe></p>\n',
    "excerpt": "<p>HMB CEO Jason Paris&#8217; weekly update.<\/p>\n",
    "date": "2016-02-15 11:26:15",
    "modified": "2016-02-15 11:26:15",
    "categories": [{
      "id": 3,
      "slug": "bunews",
      "title": "Business Unit News",
      "description": "",
      "parent": 0,
      "post_count": 159
    }],
    "tags": [{
      "id": 84,
      "slug": "jason-paris",
      "title": "Jason Paris",
      "description": "",
      "post_count": 19
    }, {
      "id": 183,
      "slug": "the-pariscope",
      "title": "The Pariscope",
      "description": "",
      "post_count": 5
    }],
    "author": {
      "id": 14,
      "slug": "jason-paris",
      "name": "Jason Paris",
      "first_name": "Jason",
      "last_name": "Paris",
      "nickname": "jason.paris",
      "url": "",
      "description": ""
    },
    "comments": [],
    "attachments": [],
    "comment_count": 0,
    "comment_status": "open",
    "thumbnail": "http:\/\/innerspark-wp.spark.co.nz\/wp-content\/uploads\/2015\/10\/Red_Lanterns_for_Chinese_New_Year_KK_31300x700-825x510.jpg",
    "custom_fields": {},
    "thumbnail_size": "post-thumbnail",
    "thumbnail_images": {
      "full": {
        "url": "http:\/\/innerspark-wp.spark.co.nz\/wp-content\/uploads\/2015\/10\/Red_Lanterns_for_Chinese_New_Year_KK_31300x700.jpg",
        "width": 1300,
        "height": 700
      },
      "thumbnail": {
        "url": "http:\/\/innerspark-wp.spark.co.nz\/wp-content\/uploads\/2015\/10\/Red_Lanterns_for_Chinese_New_Year_KK_31300x700-150x150.jpg",
        "width": 150,
        "height": 150
      },
      "medium": {
        "url": "http:\/\/innerspark-wp.spark.co.nz\/wp-content\/uploads\/2015\/10\/Red_Lanterns_for_Chinese_New_Year_KK_31300x700-300x162.jpg",
        "width": 300,
        "height": 162
      },
      "post-thumbnail": {
        "url": "http:\/\/innerspark-wp.spark.co.nz\/wp-content\/uploads\/2015\/10\/Red_Lanterns_for_Chinese_New_Year_KK_31300x700-825x510.jpg",
        "width": 825,
        "height": 510
      }
    }
  }];

  this.isMoreData = function () {
    return that.current > 2 ? false : true;
  };

  $http.get('resource/headlines.json').then(function (res) {
    that.headlines = res.data;
  });

  this.doRefresh = function () {
    $http.get('resource/headlines.json').then(function (res) {
      that.headlines = res.data;
      $scope.$broadcast('scroll.refreshComplete');
    });
  };

  var deferred = $q.defer();

  var loadMoreSvc = function loadMoreSvc(current) {

    if (timeoutHandler) {
      timeoutHandler.cancel();
      timeoutHandler = null;
    }

    timeoutHandler = $timeout(function () {
      that.current++;
      deferred.resolve(data[current]);
      that.isLoading = false;
    }, 3000);

    return deferred.promise;
  };

  this.loadMore = function () {
    $q.when(loadMoreSvc(that.current)).then(function (res) {
      that.headlines.push(res);
      that.current++;
      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  };
});