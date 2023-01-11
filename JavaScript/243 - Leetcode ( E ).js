var isPalindrome = function(head) {
    let reverseArray = []

    while(head){
        reverseArray.push(head.val)
        head = head.next
    }

    for(let i = 0; i < reverseArray.length / 2; i++){
        if(reverseArray[i] !== reverseArray[reverseArray.length - 1 - i]){
            return false
        }
    }

    return true
};