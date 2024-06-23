export const LANGUAGE_VERSIONS = {
    javascript: "18.15.0",
    typescript: "5.0.3",
    python: "3.10.0",
    java: "15.0.2",
    csharp: "6.12.0",
    php: "8.2.3",
    c:"10.2.0",
    cpp:"10.2.0",
    
  };
  
  export const CODE_SNIPPETS = {
    javascript: `function greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Buddy");\n`,
    typescript: `\ntype Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "Buddy" });\n`,
    python: `def greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Buddy")\n`,
    java: `\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello Buddy");\n\t}\n}\n`,
    csharp:
      'using System;\n\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello Buddy in C#");\n\t\t}\n\t}\n}\n',
    php: "<?php\n\n$name = 'Buddy';\necho $name;\n",
    c: `\n#include <stdio.h>\n\nint main() {\n\tprintf("Hello Buddy\\n");\n\treturn 0;\n}\n`,
    cpp:`\n#include <iostream>\n\nint main() {\n\tstd::cout << "Hello Buddy" << std::endl;\n\treturn 0;\n}\n`,
  };