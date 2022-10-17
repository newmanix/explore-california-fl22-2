

window.ALLY_CFG = {

    'baseUrl': 'https://prod.ally.ac',

    'clientId': 188,

    'lti13Id': '90000000000897'

};

$.getScript(ALLY_CFG.baseUrl + '/integration/canvas/ally.js');

 

 

 

 

////////////////////////////////////////////////////

// ATOMIC SEARCH MAGIC                       //

////////////////////////////////////////////////////

//

 

var atomicSearchWidgetScript = document.createElement("script");

atomicSearchWidgetScript.src = "https://js.atomicsearchwidget.com/atomic_search_widget.js";

document.getElementsByTagName("head")[0].appendChild(atomicSearchWidgetScript);

 

 

 

 

////////////////////////////////////////////////////

// DESIGN TOOLS CONFIG                            //

////////////////////////////////////////////////////

// Copyright (C) 2017  Utah State University

var DT_variables = {

        iframeID: '',

        // Path to the hosted USU Design Tools

        path: 'https://designtools.ciditools.com/',

        templateCourse: '2276802',

        // OPTIONAL: Button will be hidden from view until launched using shortcut keys

        hideButton: true,

             // OPTIONAL: Limit by course format

                 limitByFormat: false, // Change to true to limit by format

                 // adjust the formats as needed. Format must be set for the course and in this array for tools to load

                 formatArray: [

            'online',

            'on-campus',

            'blended'

        ],

        // OPTIONAL: Limit tools loading by users role

        limitByRole: false, // set to true to limit to roles in the roleArray

        // adjust roles as needed

        roleArray: [

            'student',

            'teacher',

            'admin'

        ],

        // OPTIONAL: Limit tools to an array of Canvas user IDs

        limitByUser: false, // Change to true to limit by user

        // add users to array (Canvas user ID not SIS user ID)

        userArray: [

            '1234',

            '987654'

        ],

                        // OPTIONAL: Relocate Ally alternative formats dropdown and hide heading

                        overrideAllyHeadings: false,

                        // OPTIONAL: Make assignment rubrics sortable

                        sortableRubrics: false,

                        // OPTIONAL: Transform people page ina course to show student cards

                        showStudentCards: false

};

 

// Run the necessary code when a page loads

$(document).ready(function () {

    'use strict';

    // This runs code that looks at each page and determines what controls to create

    $.getScript(DT_variables.path + 'js/master_controls.js', function () {

        console.log('master_controls.js loaded');

    });

});

 

 

////////////////////////////////////////////////////

// END DESIGN TOOLS CONFIG                        //

////////////////////////////////////////////////////

 

// JavaScript Document

$(document).ready(function(e) {

            $("label[for='pseudonym_session_unique_id']").html('<span style="color:#ffffff;"><strong style="color:#ffd668;">(New) Canvas Login, <a style="color:#fff;" href="https://rtc.edu/canvaslogin">https://rtc.edu/canvaslogin</span></a></strong><hr /><span style="color:#ffd668;">(Legacy) Canvas Username</span> <span style="color:#ffffff;">= Your Legacy SID# or Administrator Issued Username</span>');

$("label[for='pseudonym_session_password']").html('<span style="color:#ffd668;">(Legacy) Canvas Password <span style="color:#ffffff;">= Your Legacy Canvas Password or Administrator Issued Password</span>');

           

 

    //ADD Message after footer

    $('#footer-links').append('<div style="border:thin solid white; margin: 15px; padding: 15px;"><h3>All are welcome here.<br>Diversity is our strength.</h3></div>');

 

});

 

 

var $zoho= $zoho || {livedesk:{values:{},ready:function(){}}};var d=document;s=d.createElement("script");s.type="text/javascript";s.defer=true;s.src="https://livedesk.zoho.com/support.sdplive716334681/button.ls?embedname=itdesk";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);document.write("<div id='zldbtnframe' align=center></div>")

 

 

 
	
	
