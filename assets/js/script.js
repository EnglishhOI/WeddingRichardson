function toggleNav() {
    const navigation = document.getElementsByClassName('navigationBar');
    const bars = document.getElementsByClassName('bar');

    bars[0].classList.toggle('barOneClose');
    bars[1].classList.toggle('barTwoClose');
    bars[2].classList.toggle('barThreeClose');


    navigation[0].classList.toggle('navToggle');
}