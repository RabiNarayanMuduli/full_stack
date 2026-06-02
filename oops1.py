# class student:
#     def __init__(self, name,age):
#         self.name = name
#         self.age = age
#     def hey(self):
#         print("hello",self.name,self.age)


# p=student("rabi",21)
# p=student("bibek",23)
# print(p.name)
# print(p.age)
# p.hey()
# print(student.__doc__)

# class BankAccount:
#     def __init__(self, balance,name):
#         self.__b = balance  # private variable
#         self.name = name

#     def getb(self):
#         return self.__b

#     def deposit(self, amount):
#         self.__b += amount
#     def __str__(self):
#         return self.name

# acc = BankAccount(1000,"rabi")
# acc.deposit(500)
# print(acc.getb())  # 1500
class Animal:
    def speak(self):
        print("Some sound")

class Dog(Animal):  # Dog inherits Animal
     def speak(self):
        print("Woof!")
    
class cat(Animal):
    def speak(self):
        print("Meow!")
        
d = [Dog(),cat()]
for i in d:
    i.speak()

