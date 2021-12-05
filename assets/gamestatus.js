fetch('https://panel-api.sglorch.workers.dev/serverstatus')
.then(res => {
    return res.text();
})
.then(data => {
    $('#statuscontainer').html(data);
});
