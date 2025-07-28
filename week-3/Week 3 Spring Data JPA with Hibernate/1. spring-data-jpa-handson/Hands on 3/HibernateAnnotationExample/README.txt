✅ HibernateExamples - Fixed for JDK 21

🛠 Run Instructions (Eclipse):
------------------------------
1. Import this project into Eclipse.
2. Make sure you have JDK 17 or JDK 21 set as your runtime.

3. Right-click ManageEmployee.java → Run As → Run Configurations...
   - Go to the 'Arguments' tab.
   - In 'VM arguments', paste the following:

   --add-opens java.base/java.lang=ALL-UNNAMED --add-modules java.xml.bind

4. Click Apply → Run

💡 Notes:
- hibernate.cfg.xml is placed in /src/ (classpath)
- Removed conflicting activation jars
- JAXB API + IMPL JARs already included in /lib

Tested with:
- Hibernate 5.2.11
- MySQL 8.0+
- JDK 21

Happy Coding!
