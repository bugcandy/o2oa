package test.ticket;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;

import com.x.processplatform.core.express.ticket.Ticket;
import com.x.processplatform.core.express.ticket.Tickets;

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class SingleAddBeforeParallelTest {

	private static final List<Ticket> p1 = Arrays.asList(new Ticket("A", "LA"), new Ticket("B", "LB"),
			new Ticket("C", "LC"));
	private static final List<Ticket> p2 = Arrays.asList(new Ticket("E", "LE"), new Ticket("F", "LF"),
			new Ticket("G", "LG"));
	private static final List<Ticket> p3 = Arrays.asList(new Ticket("I", "LI"), new Ticket("J", "LJ"),
			new Ticket("K", "LK"));

	@DisplayName("B加签EFG,FEG并行处理")
	@Test
	@Order(1)
	void test01() {
		Tickets tickets = Tickets.single(p1);
		String value = tickets.bubble().stream().<String>map(Ticket::target).collect(Collectors.joining(","));
		Assertions.assertEquals("A,B,C", value);
		Optional<Ticket> opt = tickets.findTicketWithLabel("LB");
		tickets.add(opt.get(), p2, true, Tickets.MODE_PARALLEL);
		value = tickets.bubble().stream().<String>map(Ticket::target).collect(Collectors.joining(","));
		Assertions.assertEquals("E,F,G", value);
		tickets.completed("LF");
		value = tickets.bubble().stream().<String>map(Ticket::target).collect(Collectors.joining(","));
		Assertions.assertEquals("E,G", value);
		tickets.completed("LE");
		value = tickets.bubble().stream().<String>map(Ticket::target).collect(Collectors.joining(","));
		Assertions.assertEquals("G", value);
		tickets.completed("LG");
		value = tickets.bubble().stream().<String>map(Ticket::target).collect(Collectors.joining(","));
		Assertions.assertEquals("B", value);
		tickets.completed("LB");
		value = tickets.bubble().stream().<String>map(Ticket::target).collect(Collectors.joining(","));
		Assertions.assertEquals("", value);
	}

}
