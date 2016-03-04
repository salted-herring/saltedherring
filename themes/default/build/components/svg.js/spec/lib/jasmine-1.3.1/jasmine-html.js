jasmine.HtmlReporterHelpers={},jasmine.HtmlReporterHelpers.createDom=function(e,t,n){var r=document.createElement(e);for(var i=2;i<arguments.length;i++){var s=arguments[i];typeof s=="string"?r.appendChild(document.createTextNode(s)):s&&r.appendChild(s)}for(var o in t)o=="className"?r[o]=t[o]:r.setAttribute(o,t[o]);return r},jasmine.HtmlReporterHelpers.getSpecStatus=function(e){var t=e.results(),n=t.passed()?"passed":"failed";return t.skipped&&(n="skipped"),n},jasmine.HtmlReporterHelpers.appendToSummary=function(e,t){var n=this.dom.summary,r=typeof e.parentSuite=="undefined"?"suite":"parentSuite",i=e[r];i&&(typeof this.views.suites[i.id]=="undefined"&&(this.views.suites[i.id]=new jasmine.HtmlReporter.SuiteView(i,this.dom,this.views)),n=this.views.suites[i.id].element),n.appendChild(t)},jasmine.HtmlReporterHelpers.addHelpers=function(e){for(var t in jasmine.HtmlReporterHelpers)e.prototype[t]=jasmine.HtmlReporterHelpers[t]},jasmine.HtmlReporter=function(e){function t(){var e;return function(){if(e)return;var t=[],n=jasmine.HtmlReporter.parameters(u);for(var r=0;r<n.length;r++){var i=n[r].split("=");t[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}e=t.spec}(),e}function n(e){f.reporter=o.createDom("div",{id:"HTMLReporter",className:"jasmine_reporter"},f.banner=o.createDom("div",{className:"banner"},o.createDom("span",{className:"title"},"Jasmine "),o.createDom("span",{className:"version"},e)),f.symbolSummary=o.createDom("ul",{className:"symbolSummary"}),f.alert=o.createDom("div",{className:"alert"},o.createDom("span",{className:"exceptions"},o.createDom("label",{className:"label","for":"no_try_catch"},"No try/catch"),o.createDom("input",{id:"no_try_catch",type:"checkbox"}))),f.results=o.createDom("div",{className:"results"},f.summary=o.createDom("div",{className:"summary"}),f.details=o.createDom("div",{id:"details"})))}function r(){return window.location.search.match(/catch=false/)}function i(){var e=jasmine.HtmlReporter.parameters(window.document),t=!1,n=0;while(!t&&n<e.length)e[n].match(/catch=/)&&(e.splice(n,1),t=!0),n++;return jasmine.CATCH_EXCEPTIONS&&e.push("catch=false"),e.join("&")}function s(){var e=document.getElementById("no_try_catch");r()&&(e.setAttribute("checked",!0),jasmine.CATCH_EXCEPTIONS=!1),e.onclick=function(){window.location.search=i()}}var o=this,u=e||window.document,a,f={};return o.logRunningSpecs=!1,o.reportRunnerStarting=function(e){var t=e.specs()||[];if(t.length==0)return;n(e.env.versionString()),u.body.appendChild(f.reporter),s(),a=new jasmine.HtmlReporter.ReporterView(f),a.addSpecs(t,o.specFilter)},o.reportRunnerResults=function(e){a&&a.complete()},o.reportSuiteResults=function(e){a.suiteComplete(e)},o.reportSpecStarting=function(e){o.logRunningSpecs&&o.log(">> Jasmine Running "+e.suite.description+" "+e.description+"...")},o.reportSpecResults=function(e){a.specComplete(e)},o.log=function(){var e=jasmine.getGlobal().console;e&&e.log&&(e.log.apply?e.log.apply(e,arguments):e.log(arguments))},o.specFilter=function(e){return t()?e.getFullName().indexOf(t())===0:!0},o},jasmine.HtmlReporter.parameters=function(e){var t=e.location.search.substring(1),n=[];return t.length>0&&(n=t.split("&")),n},jasmine.HtmlReporter.sectionLink=function(e){var t="?",n=[];return e&&n.push("spec="+encodeURIComponent(e)),jasmine.CATCH_EXCEPTIONS||n.push("catch=false"),n.length>0&&(t+=n.join("&")),t},jasmine.HtmlReporterHelpers.addHelpers(jasmine.HtmlReporter),jasmine.HtmlReporter.ReporterView=function(e){function t(){e.reporter.className.search(/showDetails/)===-1&&(e.reporter.className+=" showDetails")}function n(e){return typeof e=="undefined"}function r(e){return!n(e)}function i(e){var t=e+" spec";return e>1&&(t+="s"),t}return this.startedAt=new Date,this.runningSpecCount=0,this.completeSpecCount=0,this.passedCount=0,this.failedCount=0,this.skippedCount=0,this.createResultsMenu=function(){this.resultsMenu=this.createDom("span",{className:"resultsMenu bar"},this.summaryMenuItem=this.createDom("a",{className:"summaryMenuItem",href:"#"},"0 specs")," | ",this.detailsMenuItem=this.createDom("a",{className:"detailsMenuItem",href:"#"},"0 failing")),this.summaryMenuItem.onclick=function(){e.reporter.className=e.reporter.className.replace(/ showDetails/g,"")},this.detailsMenuItem.onclick=function(){t()}},this.addSpecs=function(t,n){this.totalSpecCount=t.length,this.views={specs:{},suites:{}};for(var r=0;r<t.length;r++){var i=t[r];this.views.specs[i.id]=new jasmine.HtmlReporter.SpecView(i,e,this.views),n(i)&&this.runningSpecCount++}},this.specComplete=function(t){this.completeSpecCount++,n(this.views.specs[t.id])&&(this.views.specs[t.id]=new jasmine.HtmlReporter.SpecView(t,e));var r=this.views.specs[t.id];switch(r.status()){case"passed":this.passedCount++;break;case"failed":this.failedCount++;break;case"skipped":this.skippedCount++}r.refresh(),this.refresh()},this.suiteComplete=function(e){var t=this.views.suites[e.id];if(n(t))return;t.refresh()},this.refresh=function(){n(this.resultsMenu)&&this.createResultsMenu(),n(this.runningAlert)&&(this.runningAlert=this.createDom("a",{href:jasmine.HtmlReporter.sectionLink(),className:"runningAlert bar"}),e.alert.appendChild(this.runningAlert)),this.runningAlert.innerHTML="Running "+this.completeSpecCount+" of "+i(this.totalSpecCount),n(this.skippedAlert)&&(this.skippedAlert=this.createDom("a",{href:jasmine.HtmlReporter.sectionLink(),className:"skippedAlert bar"})),this.skippedAlert.innerHTML="Skipping "+this.skippedCount+" of "+i(this.totalSpecCount)+" - run all",this.skippedCount===1&&r(e.alert)&&e.alert.appendChild(this.skippedAlert),n(this.passedAlert)&&(this.passedAlert=this.createDom("span",{href:jasmine.HtmlReporter.sectionLink(),className:"passingAlert bar"})),this.passedAlert.innerHTML="Passing "+i(this.passedCount),n(this.failedAlert)&&(this.failedAlert=this.createDom("span",{href:"?",className:"failingAlert bar"})),this.failedAlert.innerHTML="Failing "+i(this.failedCount),this.failedCount===1&&r(e.alert)&&(e.alert.appendChild(this.failedAlert),e.alert.appendChild(this.resultsMenu)),this.summaryMenuItem.innerHTML=""+i(this.runningSpecCount),this.detailsMenuItem.innerHTML=""+this.failedCount+" failing"},this.complete=function(){e.alert.removeChild(this.runningAlert),this.skippedAlert.innerHTML="Ran "+this.runningSpecCount+" of "+i(this.totalSpecCount)+" - run all",this.failedCount===0?e.alert.appendChild(this.createDom("span",{className:"passingAlert bar"},"Passing "+i(this.passedCount))):t(),e.banner.appendChild(this.createDom("span",{className:"duration"},"finished in "+((new Date).getTime()-this.startedAt.getTime())/1e3+"s"))},this},jasmine.HtmlReporterHelpers.addHelpers(jasmine.HtmlReporter.ReporterView),jasmine.HtmlReporter.SpecView=function(e,t,n){this.spec=e,this.dom=t,this.views=n,this.symbol=this.createDom("li",{className:"pending"}),this.dom.symbolSummary.appendChild(this.symbol),this.summary=this.createDom("div",{className:"specSummary"},this.createDom("a",{className:"description",href:jasmine.HtmlReporter.sectionLink(this.spec.getFullName()),title:this.spec.getFullName()},this.spec.description)),this.detail=this.createDom("div",{className:"specDetail"},this.createDom("a",{className:"description",href:"?spec="+encodeURIComponent(this.spec.getFullName()),title:this.spec.getFullName()},this.spec.getFullName()))},jasmine.HtmlReporter.SpecView.prototype.status=function(){return this.getSpecStatus(this.spec)},jasmine.HtmlReporter.SpecView.prototype.refresh=function(){this.symbol.className=this.status();switch(this.status()){case"skipped":break;case"passed":this.appendSummaryToSuiteDiv();break;case"failed":this.appendSummaryToSuiteDiv(),this.appendFailureDetail()}},jasmine.HtmlReporter.SpecView.prototype.appendSummaryToSuiteDiv=function(){this.summary.className+=" "+this.status(),this.appendToSummary(this.spec,this.summary)},jasmine.HtmlReporter.SpecView.prototype.appendFailureDetail=function(){this.detail.className+=" "+this.status();var e=this.spec.results().getItems(),t=this.createDom("div",{className:"messages"});for(var n=0;n<e.length;n++){var r=e[n];r.type=="log"?t.appendChild(this.createDom("div",{className:"resultMessage log"},r.toString())):r.type=="expect"&&r.passed&&!r.passed()&&(t.appendChild(this.createDom("div",{className:"resultMessage fail"},r.message)),r.trace.stack&&t.appendChild(this.createDom("div",{className:"stackTrace"},r.trace.stack)))}t.childNodes.length>0&&(this.detail.appendChild(t),this.dom.details.appendChild(this.detail))},jasmine.HtmlReporterHelpers.addHelpers(jasmine.HtmlReporter.SpecView),jasmine.HtmlReporter.SuiteView=function(e,t,n){this.suite=e,this.dom=t,this.views=n,this.element=this.createDom("div",{className:"suite"},this.createDom("a",{className:"description",href:jasmine.HtmlReporter.sectionLink(this.suite.getFullName())},this.suite.description)),this.appendToSummary(this.suite,this.element)},jasmine.HtmlReporter.SuiteView.prototype.status=function(){return this.getSpecStatus(this.suite)},jasmine.HtmlReporter.SuiteView.prototype.refresh=function(){this.element.className+=" "+this.status()},jasmine.HtmlReporterHelpers.addHelpers(jasmine.HtmlReporter.SuiteView),jasmine.TrivialReporter=function(e){this.document=e||document,this.suiteDivs={},this.logRunningSpecs=!1},jasmine.TrivialReporter.prototype.createDom=function(e,t,n){var r=document.createElement(e);for(var i=2;i<arguments.length;i++){var s=arguments[i];typeof s=="string"?r.appendChild(document.createTextNode(s)):s&&r.appendChild(s)}for(var o in t)o=="className"?r[o]=t[o]:r.setAttribute(o,t[o]);return r},jasmine.TrivialReporter.prototype.reportRunnerStarting=function(e){var t,n;this.outerDiv=this.createDom("div",{id:"TrivialReporter",className:"jasmine_reporter"},this.createDom("div",{className:"banner"},this.createDom("div",{className:"logo"},this.createDom("span",{className:"title"},"Jasmine"),this.createDom("span",{className:"version"},e.env.versionString())),this.createDom("div",{className:"options"},"Show ",t=this.createDom("input",{id:"__jasmine_TrivialReporter_showPassed__",type:"checkbox"}),this.createDom("label",{"for":"__jasmine_TrivialReporter_showPassed__"}," passed "),n=this.createDom("input",{id:"__jasmine_TrivialReporter_showSkipped__",type:"checkbox"}),this.createDom("label",{"for":"__jasmine_TrivialReporter_showSkipped__"}," skipped"))),this.runnerDiv=this.createDom("div",{className:"runner running"},this.createDom("a",{className:"run_spec",href:"?"},"run all"),this.runnerMessageSpan=this.createDom("span",{},"Running..."),this.finishedAtSpan=this.createDom("span",{className:"finished-at"},""))),this.document.body.appendChild(this.outerDiv);var r=e.suites();for(var i=0;i<r.length;i++){var s=r[i],o=this.createDom("div",{className:"suite"},this.createDom("a",{className:"run_spec",href:"?spec="+encodeURIComponent(s.getFullName())},"run"),this.createDom("a",{className:"description",href:"?spec="+encodeURIComponent(s.getFullName())},s.description));this.suiteDivs[s.id]=o;var u=this.outerDiv;s.parentSuite&&(u=this.suiteDivs[s.parentSuite.id]),u.appendChild(o)}this.startedAt=new Date;var a=this;t.onclick=function(e){t.checked?a.outerDiv.className+=" show-passed":a.outerDiv.className=a.outerDiv.className.replace(/ show-passed/,"")},n.onclick=function(e){n.checked?a.outerDiv.className+=" show-skipped":a.outerDiv.className=a.outerDiv.className.replace(/ show-skipped/,"")}},jasmine.TrivialReporter.prototype.reportRunnerResults=function(e){var t=e.results(),n=t.failedCount>0?"runner failed":"runner passed";this.runnerDiv.setAttribute("class",n),this.runnerDiv.setAttribute("className",n);var r=e.specs(),i=0;for(var s=0;s<r.length;s++)this.specFilter(r[s])&&i++;var o=""+i+" spec"+(i==1?"":"s")+", "+t.failedCount+" failure"+(t.failedCount==1?"":"s");o+=" in "+((new Date).getTime()-this.startedAt.getTime())/1e3+"s",this.runnerMessageSpan.replaceChild(this.createDom("a",{className:"description",href:"?"},o),this.runnerMessageSpan.firstChild),this.finishedAtSpan.appendChild(document.createTextNode("Finished at "+(new Date).toString()))},jasmine.TrivialReporter.prototype.reportSuiteResults=function(e){var t=e.results(),n=t.passed()?"passed":"failed";t.totalCount===0&&(n="skipped"),this.suiteDivs[e.id].className+=" "+n},jasmine.TrivialReporter.prototype.reportSpecStarting=function(e){this.logRunningSpecs&&this.log(">> Jasmine Running "+e.suite.description+" "+e.description+"...")},jasmine.TrivialReporter.prototype.reportSpecResults=function(e){var t=e.results(),n=t.passed()?"passed":"failed";t.skipped&&(n="skipped");var r=this.createDom("div",{className:"spec "+n},this.createDom("a",{className:"run_spec",href:"?spec="+encodeURIComponent(e.getFullName())},"run"),this.createDom("a",{className:"description",href:"?spec="+encodeURIComponent(e.getFullName()),title:e.getFullName()},e.description)),i=t.getItems(),s=this.createDom("div",{className:"messages"});for(var o=0;o<i.length;o++){var u=i[o];u.type=="log"?s.appendChild(this.createDom("div",{className:"resultMessage log"},u.toString())):u.type=="expect"&&u.passed&&!u.passed()&&(s.appendChild(this.createDom("div",{className:"resultMessage fail"},u.message)),u.trace.stack&&s.appendChild(this.createDom("div",{className:"stackTrace"},u.trace.stack)))}s.childNodes.length>0&&r.appendChild(s),this.suiteDivs[e.suite.id].appendChild(r)},jasmine.TrivialReporter.prototype.log=function(){var e=jasmine.getGlobal().console;e&&e.log&&(e.log.apply?e.log.apply(e,arguments):e.log(arguments))},jasmine.TrivialReporter.prototype.getLocation=function(){return this.document.location},jasmine.TrivialReporter.prototype.specFilter=function(e){var t={},n=this.getLocation().search.substring(1).split("&");for(var r=0;r<n.length;r++){var i=n[r].split("=");t[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return t.spec?e.getFullName().indexOf(t.spec)===0:!0};