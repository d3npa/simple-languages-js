# simple-languages-js
A small Javascript snippet for smooth bi/multilingual websites.

## Usage
Set the default page language:
```html
<html lang="en">
```

Import script into page:
```html
<script type="text/javascript" src="./simple-lang.js"></script>
```

Create multilingual content:
```html
<t en>Welcome!</t>
<t is>Velkomin/n!</t>
```

Change the displayed language with Javascript:
```javascript
setLanguage("is");
```

That's it!

## Extra
You can get creative!
This is a light framework for programatically displaying/hiding text!
- Attribute names do not need to be real language codes!
- Text within a language tag can be anything!

More languages
```html
The word for thank-you
<t is> in Icelandic is "takk fyrir"</t>
<t ainu> in Ainu is "イヤイライケレ"</t>
<t internet> on the internet is "thx"</t>
```

Programming languages
```html
Hello world program in
<t python>Python:
<pre>
print("Hello world")
</pre>
</t>
<t c>C:
<pre>
#import <stdio.h>

void main() {
    printf("Hello, world!");
}
</pre>
<t nasm64>
BITS 64
SECTION .DATA
    greeting:       db "Hello, world!", 0x0A
    greetingLen:    equ $-greeting

SECTION .TEXT
    GLOBAL _start

_start:
    mov rax, 1
    mov rdi, 1
    mov rsi, greeting
    mov rdx, greetingLen
    syscall

    mov rax, 0x3c
    xor rdi, rdi
    syscall
</t>
```

Or changing links
```html
Go to
<t fr><a href="https://google.fr">Google</a></t>
<t ja><a href="https://google.co.jp">Google</a></t>
```

## License
Please review the attached [MIT license](./LICENSE).
