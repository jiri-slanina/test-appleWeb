function zobrazZpravu() {
    document.getElementById("smazat").style.display = "inline-block"
    document.getElementById("zprava1"). textContent = "Apple Watch nejsou jen chytré hodinky, ale rozšíření tvého digitálního života. Kombinují elegantní design s pokročilými funkcemi – od zdravotních metrik, jako je srdeční rytmus, okysličení krve nebo EKG, až po notifikace, navigaci a bezkontaktní platby. Dokážou ti ušetřit čas, pomáhají udržet disciplínu ve zdraví i pohybu a fungují jako diskrétní asistent v běžném i pracovním dni. Pro uživatele iPhonu představují nejlépe integrované nositelné zařízení na trhu."
}

function smazZpravu() {
    document.getElementById("zprava1"). textContent = ""
    document.getElementById("smazat").style.display = "none"
}