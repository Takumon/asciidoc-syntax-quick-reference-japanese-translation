package example;

public class StringUtils {
    public boolean contains(String a, String b) {
        if(a == null) {
          return false;
        }

        return a.contains(b);
    }
}
