function doGet(){return HtmlService.createHtmlOutputFromFile('Index').setTitle('Progress Dashboard Demo');}
function getProgressData(){return [
{id:'L001',name:'Alex Chen',target:'B',current:'B',trend:'↑',status:'Positive'},
{id:'L002',name:'Jamie Patel',target:'C',current:'D',trend:'→',status:'Watch'},
{id:'L003',name:'Morgan Lee',target:'B',current:'C',trend:'↑',status:'Review'},
{id:'L004',name:'Sam Rivera',target:'C',current:'C',trend:'↑',status:'Positive'},
{id:'L005',name:'Taylor Kim',target:'B',current:'C',trend:'→',status:'Watch'},
{id:'L006',name:'Jordan Smith',target:'C',current:'B',trend:'↑',status:'Positive'}
];}