var grade='A';
console.log("\nEntering switch block\n");
switch (grade)
{
    case 'A': 
    {
        console.log("Good job\n");
        console.log("You can do better.\n")
    }
    break;
    case 'B': console.log("Pretty good\n");
    break;
    case 'C': console.log("Passed\n");
    break;
    case 'D': console.log("Not so good\n");
    break;
    case 'F': console.log("Failed\n");
    break;
    default: console.log("Unknown grade\n")
}
