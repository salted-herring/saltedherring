define(["../var/document","../var/support"],function(e,t){return function(){var n=e.createElement("input"),r=e.createElement("select"),i=r.appendChild(e.createElement("option"));n.type="checkbox",t.checkOn=n.value!=="",t.optSelected=i.selected,r.disabled=!0,t.optDisabled=!i.disabled,n=e.createElement("input"),n.value="t",n.type="radio",t.radioValue=n.value==="t"}(),t});