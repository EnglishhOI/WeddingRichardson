function toggleNav() {
    const navigation = document.getElementsByClassName('navigationBar');
    const bars = document.getElementsByClassName('bar');
    const dim = document.getElementById('dim');

    bars[0].classList.toggle('barOneClose');
    bars[1].classList.toggle('barTwoClose');
    bars[2].classList.toggle('barThreeClose');


    dim.classList.toggle('active');
    navigation[0].classList.toggle('navToggle');


}