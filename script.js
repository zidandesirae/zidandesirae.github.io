// QUICK LINK TO OPEN TAB 2
$("#quickLink2").click(function() {
    $('#nav-tab a[href="#nav-portfolio"]').tab('show');
});


// OPENS CONTACT PAGE (TAB 3)
const contact = () => {
    $('#nav-tab a[href="#nav-contact"]').tab('show');
};

//QUICK LINK TO OPEN TAB 3
$("#quickLink3").click(function() {
    contact();
});

//CONTACT ICON TO OPEN TAB 3
$("#nav-contact-tab").click(function() {
    contact();
});
