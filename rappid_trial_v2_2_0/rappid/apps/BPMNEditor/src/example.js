/*! Rappid v2.2.0 - HTML5 Diagramming Framework - TRIAL VERSION

Copyright (c) 2015 client IO

 2018-05-06 


This Source Code Form is subject to the terms of the Rappid Trial License
, v. 2.0. If a copy of the Rappid License was not distributed with this
file, You can obtain one at http://jointjs.com/license/rappid_v2.txt
 or from the Rappid archive as was distributed by client IO. See the LICENSE file.*/


window.example = {
    'cells':[
        { 'type':'bpmn.Flow', 'flowType':'normal', 'id':'b86ee66a-b628-4883-8975-a21d80547c5a', 'embeds':'', 'source':{ 'id':'30b45d57-a9fb-4d8e-bc6c-9cbd27344b76' }, 'target':{ 'id':'8daae8a2-ae07-4a33-99a2-498d90e9dbeb' }, 'z':-1, 'attrs':{}},
        { 'type':'bpmn.Flow', 'flowType':'normal', 'id':'f3a8a4eb-0c07-4807-8190-a5d29b2bc4f0', 'embeds':'', 'source':{ 'id':'f06e2e0c-43b8-4ce4-8b03-3441bd696228' }, 'target':{ 'id':'ad273d3d-d093-4d09-8e4a-fcbd20e78a8c' }, 'z':-1, 'attrs':{}},
        { 'type':'bpmn.Flow', 'flowType':'normal', 'id':'4b1e80c2-f2bf-4eb2-82b5-de64a680f063', 'embeds':'', 'source':{ 'id':'5f20a0f6-f60f-4b9f-a67e-aabf3c57200b' }, 'target':{ 'id':'b2797827-0135-4c4d-8958-4b8bcd7144e9' }, 'z':-1, 'attrs':{}},
        { 'type':'bpmn.Flow', 'flowType':'normal', 'id':'49056d0d-20f8-4487-8e34-38e2bd103790', 'embeds':'', 'source':{ 'id':'b2797827-0135-4c4d-8958-4b8bcd7144e9' }, 'target':{ 'id':'9aabf30d-7f53-4d16-a374-d2362d000f94' }, 'z':-1, 'attrs':{}},
        { 'type':'bpmn.Flow', 'flowType':'normal', 'id':'49fb9204-bb6e-40c1-8aec-70bdeef07cee', 'embeds':'', 'source':{ 'id':'9aabf30d-7f53-4d16-a374-d2362d000f94' }, 'target':{ 'id':'de4bbbaf-650f-4250-8ac4-4f1de5cdafe1' }, 'z':-1, 'attrs':{}},
        { 'type':'bpmn.Flow', 'flowType':'normal', 'id':'08adac7d-f375-41ec-8187-7cb1f2e419b0', 'embeds':'', 'source':{ 'id':'de4bbbaf-650f-4250-8ac4-4f1de5cdafe1' }, 'target':{ 'id':'f06e2e0c-43b8-4ce4-8b03-3441bd696228' }, 'z':-1, 'vertices':[{ 'x':930, 'y':1240 }], 'attrs':{}},
        { 'type':'bpmn.Flow', 'flowType':'normal', 'id':'0772f53d-393d-4bdc-b5a9-538c1b60d384', 'embeds':'', 'source':{ 'id':'de4bbbaf-650f-4250-8ac4-4f1de5cdafe1' }, 'target':{ 'id':'30b45d57-a9fb-4d8e-bc6c-9cbd27344b76' }, 'z':-1, 'vertices':[{ 'x':930, 'y':760 }], 'attrs':{}},
        { 'type':'bpmn.Flow', 'flowType':'association', 'id':'2d1e8d65-012b-4978-ad93-ecb8f55a39cd', 'embeds':'', 'source':{ 'id':'10d9bf17-3222-4554-9e1c-46c21edc6b51' }, 'target':{ 'id':'de4bbbaf-650f-4250-8ac4-4f1de5cdafe1' }, 'z':-1, 'attrs':{ '.marker-target':{ 'd':'M 0 0' }, '.connection':{ 'stroke-dasharray':'4,4' }}},
        { 'type':'bpmn.Flow', 'flowType':'association', 'id':'3ca33ae0-1932-4ff0-a0c9-bf6500b1ae19', 'embeds':'', 'source':{ 'id':'bc57e168-a433-4f4b-afbf-1313f6e1085c' }, 'target':{ 'id':'de4bbbaf-650f-4250-8ac4-4f1de5cdafe1' }, 'z':-1, 'attrs':{ '.marker-target':{ 'd':'M 0 0' }, '.connection':{ 'stroke-dasharray':'4,4' }}},
        { 'type':'bpmn.Flow', 'flowType':'message', 'id':'4f2ca158-15ed-4d46-8c1b-ca587b310a87', 'embeds':'', 'source':{ 'id':'77736108-a7ae-4986-8c4e-3ed09bf38c1c' }, 'target':{ 'id':'b2797827-0135-4c4d-8958-4b8bcd7144e9' }, 'z':-1, 'attrs':{ '.marker-target':{ 'fill':'#FFF' }, '.connection':{ 'stroke-dasharray':'4,4' }}},
        { 'type':'bpmn.Flow', 'flowType':'message', 'id':'505827c2-011f-40ff-b260-b7e093728a94', 'embeds':'', 'source':{ 'id':'f14459a2-5158-41bb-90ac-4e49bf059500' }, 'target':{ 'id':'b2797827-0135-4c4d-8958-4b8bcd7144e9' }, 'z':-1, 'attrs':{ '.marker-target':{ 'fill':'#FFF' }, '.connection':{ 'stroke-dasharray':'4,4' }}},
        { 'type':'bpmn.Flow', 'flowType':'association', 'id':'4239fe86-4721-4443-a3f2-e45f64a3bfd6', 'embeds':'', 'source':{ 'id':'993e6828-acdd-4f90-b7b8-67cf4bc7dd17' }, 'target':{ 'id':'ad273d3d-d093-4d09-8e4a-fcbd20e78a8c' }, 'z':-1, 'attrs':{ '.marker-target':{ 'd':'M 0 0' }, '.connection':{ 'stroke-dasharray':'4,4' }}},
        { 'type':'bpmn.Choreography', 'size':{ 'width':140, 'height':140 }, 'participants':['Seller', 'Auction House'], 'initiatingParticipant':'Seller', 'content':'publish auction', 'position':{ 'x':430, 'y':940 }, 'angle':0, 'id':'b2797827-0135-4c4d-8958-4b8bcd7144e9', 'embeds':'', 'z':1, 'subProcess':false, 'attrs':{ '.participant-rect':{ 'fill':'#d8d8d8' }, '.sub-process':{ 'visibility':'hidden', 'data-sub-process':'' }, '.fobj':{ 'width':140, 'height':140 }, 'div':{ 'style':{ 'width':140, 'height':140 }, 'html':'publish auction' }}},
        { 'type':'bpmn.Choreography', 'size':{ 'width':140, 'height':140 }, 'participants':['Potential Buyer', 'Auction House'], 'initiatingParticipant':'Potential Buyer', 'content':'place offer', 'position':{ 'x':650.0000000000001, 'y':940 }, 'angle':0, 'id':'9aabf30d-7f53-4d16-a374-d2362d000f94', 'embeds':'', 'z':2, 'subProcess':false, 'attrs':{ '.participant-rect':{ 'fill':'#d8d8d8' }, '.sub-process':{ 'visibility':'hidden', 'data-sub-process':'' }, '.fobj':{ 'width':140, 'height':140 }, 'div':{ 'style':{ 'width':140, 'height':140 }, 'html':'place offer' }}},
        { 'type':'bpmn.Choreography', 'size':{ 'width':140, 'height':140 }, 'participants':['Seller', 'Buyer', 'Auction House'], 'initiatingParticipant':'Auction House', 'content':'purchase process', 'position':{ 'x':1080, 'y':700 }, 'angle':0, 'id':'30b45d57-a9fb-4d8e-bc6c-9cbd27344b76', 'embeds':'', 'z':3, 'subProcess':true, 'attrs':{ '.participant-rect':{ 'fill':'#d8d8d8' }, '.sub-process':{ 'visibility':'visible', 'data-sub-process':true }, '.fobj':{ 'width':140, 'height':140 }, 'div':{ 'style':{ 'width':140, 'height':140 }}}},
        { 'type':'bpmn.Choreography', 'size':{ 'width':140, 'height':140 }, 'participants':['Seller', 'Auction House'], 'initiatingParticipant':'Seller', 'content':'Inform about product being not sold', 'position':{ 'x':1080, 'y':1160 }, 'angle':0, 'id':'f06e2e0c-43b8-4ce4-8b03-3441bd696228', 'embeds':'', 'z':4, 'subProcess':false, 'attrs':{ '.participant-rect':{ 'fill':'#d8d8d8' }, '.sub-process':{ 'visibility':'hidden', 'data-sub-process':'' }, '.fobj':{ 'width':140, 'height':140 }, 'div':{ 'style':{ 'width':140, 'height':140 }}}},
        { 'type':'bpmn.Event', 'size':{ 'width':70, 'height':70 }, 'eventType':'start', 'position':{ 'x':230, 'y':980 }, 'angle':0, 'id':'5f20a0f6-f60f-4b9f-a67e-aabf3c57200b', 'embeds':'', 'z':5, 'icon':'none', 'attrs':{ '.inner':{ 'visibility':'hidden' }}},
        { 'type':'bpmn.Event', 'size':{ 'width':70, 'height':70 }, 'eventType':'end', 'position':{ 'x':1340, 'y':720 }, 'angle':0, 'id':'8daae8a2-ae07-4a33-99a2-498d90e9dbeb', 'embeds':'', 'z':6, 'icon':'none', 'attrs':{ '.outer':{ 'stroke-width':5 }, '.inner':{ 'visibility':'hidden' }}},
        { 'type':'bpmn.Event', 'size':{ 'width':70, 'height':70 }, 'eventType':'end', 'position':{ 'x':1330, 'y':1200 }, 'angle':0, 'id':'ad273d3d-d093-4d09-8e4a-fcbd20e78a8c', 'embeds':'', 'z':7, 'icon':'none', 'attrs':{ '.outer':{ 'stroke-width':5 }, '.inner':{ 'visibility':'hidden' }}},
        { 'type':'bpmn.Gateway', 'size':{ 'width':70, 'height':70 }, 'position':{ 'x':900, 'y':970 }, 'angle':0, 'id':'de4bbbaf-650f-4250-8ac4-4f1de5cdafe1', 'embeds':'', 'z':8, 'icon':'cross', 'attrs':{ 'image':{ 'xlink:href':'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjI0cHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0cHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yMi4yNDUsNC4wMTVjMC4zMTMsMC4zMTMsMC4zMTMsMC44MjYsMCwxLjEzOWwtNi4yNzYsNi4yN2MtMC4zMTMsMC4zMTItMC4zMTMsMC44MjYsMCwxLjE0bDYuMjczLDYuMjcyICBjMC4zMTMsMC4zMTMsMC4zMTMsMC44MjYsMCwxLjE0bC0yLjI4NSwyLjI3N2MtMC4zMTQsMC4zMTItMC44MjgsMC4zMTItMS4xNDIsMGwtNi4yNzEtNi4yNzFjLTAuMzEzLTAuMzEzLTAuODI4LTAuMzEzLTEuMTQxLDAgIGwtNi4yNzYsNi4yNjdjLTAuMzEzLDAuMzEzLTAuODI4LDAuMzEzLTEuMTQxLDBsLTIuMjgyLTIuMjhjLTAuMzEzLTAuMzEzLTAuMzEzLTAuODI2LDAtMS4xNGw2LjI3OC02LjI2OSAgYzAuMzEzLTAuMzEyLDAuMzEzLTAuODI2LDAtMS4xNEwxLjcwOSw1LjE0N2MtMC4zMTQtMC4zMTMtMC4zMTQtMC44MjcsMC0xLjE0bDIuMjg0LTIuMjc4QzQuMzA4LDEuNDE3LDQuODIxLDEuNDE3LDUuMTM1LDEuNzMgIEwxMS40MDUsOGMwLjMxNCwwLjMxNCwwLjgyOCwwLjMxNCwxLjE0MSwwLjAwMWw2LjI3Ni02LjI2N2MwLjMxMi0wLjMxMiwwLjgyNi0wLjMxMiwxLjE0MSwwTDIyLjI0NSw0LjAxNXoiLz48L3N2Zz4=' }}},
        { 'type':'bpmn.Annotation', 'size':{ 'width':70, 'height':70 }, 'wingLength':20, 'content':'Product not sold', 'position':{ 'x':830, 'y':1150 }, 'angle':0, 'id':'10d9bf17-3222-4554-9e1c-46c21edc6b51', 'embeds':'', 'z':9, 'attrs':{ 'rect':{ 'fill-opacity':'0.1' }, '.stroke':{ 'd':'M 20 0 L 0 0 0 70 20 70' }, '.fobj':{ 'width':70, 'height':70 }, 'div':{ 'style':{ 'width':70, 'height':70 }}}},
        { 'type':'bpmn.Annotation', 'size':{ 'width':70, 'height':70 }, 'wingLength':20, 'content':'Product sold', 'position':{ 'x':830, 'y':810 }, 'angle':0, 'id':'bc57e168-a433-4f4b-afbf-1313f6e1085c', 'embeds':'', 'z':10, 'attrs':{ 'rect':{ 'fill-opacity':'0.1' }, '.stroke':{ 'd':'M 20 0 L 0 0 0 70 20 70' }, '.fobj':{ 'width':70, 'height':70 }, 'div':{ 'style':{ 'width':70, 'height':70 }}}},
        { 'type':'bpmn.Message', 'size':{ 'width':70, 'height':46.66666666666667 }, 'position':{ 'x':470, 'y':780 }, 'angle':0, 'id':'77736108-a7ae-4986-8c4e-3ed09bf38c1c', 'embeds':'', 'z':11, 'attrs':{ '.label':{ 'text':'product information' }}},
        { 'type':'bpmn.Message', 'size':{ 'width':70, 'height':46.66666666666667 }, 'position':{ 'x':460, 'y':1190 }, 'angle':0, 'id':'f14459a2-5158-41bb-90ac-4e49bf059500', 'embeds':'', 'z':12, 'attrs':{ '.body':{ 'fill':'#d8d8d8' }, '.label':{ 'text':'auction no.' }}},
        { 'type':'bpmn.Annotation', 'size':{ 'width':190, 'height':80 }, 'wingLength':20, 'content':'This example\nis taken from\nbpmn-community.org', 'position':{ 'x':1450, 'y':1190 }, 'angle':0, 'id':'993e6828-acdd-4f90-b7b8-67cf4bc7dd17', 'embeds':'', 'z':13, 'attrs':{ '.stroke':{ 'd':'M 20 0 L 0 0 0 80 20 80' }, '.fobj':{ 'width':190, 'height':80 }, 'div':{ 'style':{ 'width':190, 'height':80 }}}}
    ]
};
